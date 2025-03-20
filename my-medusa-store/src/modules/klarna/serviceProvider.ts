import { Logger } from "@medusajs/medusa";
import axios, { AxiosInstance } from "axios";
import _ from "lodash";
import { PaymentService } from "medusa-interfaces";



// Define interfaces for the options and other data structures
export interface KlarnaOptions {
  backend_url: string;
  url: string;
  user: string;
  password: string;
  merchant_urls: {
    terms: string;
    checkout: string;
    confirmation: string;
  };
  payment_collection_urls?: {
    terms: string;
    checkout: string;
    confirmation: string;
  };
}

interface CartItem {
  title: string;
  quantity: number;
  original_total: number;
  total: number;
  tax_total: number;
  tax_lines: { rate: number }[];
}

interface ShippingMethod {
  shipping_option: { name: string; id: string };
  total: number;
  price: number;
  tax_total: number;
  tax_lines: { rate: number }[];
}

interface Cart {
  id: string;
  resource_id?: string;
  email?: string;
  items?: CartItem[];
  shipping_methods?: ShippingMethod[];
  shipping_total: number;
  gift_card_total: number;
  gift_card_tax_total: number;
  tax_total: number;
  total: number;
  region: { currency_code: string; tax_rate: number };
  billing_address: Partial<Address>;
  shipping_address: Partial<Address>;
}

interface Address {
  address_1: string;
  address_2?: string;
  postal_code: string;
  city: string;
  country_code: string;
  first_name?: string;
}

interface KlarnaOrderLine {
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_tax_amount: number;
  total_discount_amount?: number;
  type?: "shipping_fee" | "gift_card";
}

interface KlarnaOrder {
  merchant_data?: string;
  locale: string;
  order_lines: KlarnaOrderLine[];
  order_amount: number;
  order_tax_amount: number;
  purchase_country: string;
  purchase_currency: string;
  merchant_urls: {
    terms: string;
    checkout: string;
    confirmation: string;
    push: string;
    shipping_option_update?: string;
    address_update?: string;
  };
  billing_address?: Partial<Address>;
  shipping_options?: Array<{
    id: string;
    name: string;
    price: number;
    tax_amount: number;
    tax_rate: number;
  }>;
  selected_shipping_option?: {
    id: string;
    name: string;
    price: number;
    tax_amount: number;
    tax_rate: number;
  };
}

interface PaymentInput {
  cart?: Cart;
  currency_code: string;
  amount: number;
  resource_id?: string;
}

interface PaymentData {
  order_id: string;
  [key: string]: any;
}


export interface ShippingProfileService {
  fetchCartOptions(cart: Cart): Promise<any[]>;
}

class KlarnaProviderService extends PaymentService {
  static identifier = "klarna"
  private options_: KlarnaOptions;
  private logger_: Logger;
  private klarna_: AxiosInstance;
  private klarnaOrderUrl_: string = "/checkout/v3/orders";
  private klarnaOrderManagementUrl_: string = "/ordermanagement/v1/orders";
  private backendUrl_: string;
  private shippingProfileService_: ShippingProfileService;

  constructor(
    { logger, shippingProfileService }: { logger: Logger; shippingProfileService: ShippingProfileService },
    options: KlarnaOptions
  ) {
    super();

    this.options_ = options;
    this.logger_ = logger;
    this.backendUrl_ = options.backend_url;
    this.shippingProfileService_ = shippingProfileService;

    this.klarna_ = axios.create({
      baseURL: options.url,
      auth: {
        username: options.user,
        password: options.password,
      },
    });
  }

  private async lineItemsToOrderLines_(cart: Cart): Promise<KlarnaOrderLine[]> {
    const order_lines: KlarnaOrderLine[] = [];

    for (const item of cart.items ?? []) {
      const quantity = item.quantity;
      const tax = item.tax_lines.reduce((acc, next) => acc + next.rate, 0) / 100;

      order_lines.push({
        name: item.title,
        tax_rate: tax * 10000,
        quantity,
        unit_price: Math.round(item.original_total / item.quantity),
        total_amount: item.total,
        total_tax_amount: item.tax_total,
        total_discount_amount: item.original_total - item.total,
      });
    }

    if (cart.shipping_methods?.length) {
      const name: string[] = [];
      let total = 0;
      let tax = 0;
      let taxRate = 0;

      if (cart.shipping_total > 0) {
        for (const method of cart.shipping_methods) {
          const methodTaxRate =
            method.tax_lines.reduce((acc, next) => acc + next.rate, 0) / 100;

          name.push(method.shipping_option.name);
          total += method.total;
          taxRate += (method.price / cart.shipping_total) * methodTaxRate;
          tax += method.tax_total;
        }
      }

      order_lines.push({
        name: name?.join(" + ") || "Shipping fee",
        quantity: 1,
        type: "shipping_fee",
        unit_price: total,
        tax_rate: taxRate * 10000,
        total_amount: total,
        total_tax_amount: tax,
      });
    }

    return order_lines;
  }

  private async cartToKlarnaOrder(cart: Cart): Promise<KlarnaOrder> {
    //@ts-ignore
    const order: KlarnaOrder = {
      merchant_data: cart.resource_id ?? cart.id,
      locale: "en-US",
    };

    const { region, gift_card_total, tax_total, total } = cart;

    order.order_lines = await this.lineItemsToOrderLines_(cart);

    if (gift_card_total) {
      const taxRate = cart.gift_card_tax_total / cart.gift_card_total;

      order.order_lines.push({
        name: "Gift Card",
        quantity: 1,
        type: "gift_card",
        unit_price: -1 * (cart.gift_card_total + cart.gift_card_tax_total),
        tax_rate: Math.round(taxRate * 10000),
        total_amount: -1 * (cart.gift_card_total + cart.gift_card_tax_total),
        total_tax_amount: -1 * cart.gift_card_tax_total,
      });
    }

    if (!_.isEmpty(cart.billing_address)) {
      order.billing_address = {
        //@ts-ignore
        email: cart.email,
        street_address: cart.billing_address.address_1,
        street_address2: cart.billing_address.address_2,
        postal_code: cart.billing_address.postal_code,
        city: cart.billing_address.city,
        country: cart.billing_address.country_code,
      };
    }

    const hasCountry = !_.isEmpty(cart.shipping_address) && cart.shipping_address.country_code;
    //@ts-ignore
    order.purchase_country = hasCountry ? cart.shipping_address.country_code.toUpperCase() : "SE";

    order.order_amount = total;
    order.order_tax_amount = tax_total - (cart.gift_card_tax_total ?? 0);
    order.purchase_currency = region?.currency_code?.toUpperCase() ?? "SE";

    order.merchant_urls = {
      terms: this.options_.merchant_urls.terms,
      checkout: this.options_.merchant_urls.checkout,
      confirmation: this.options_.merchant_urls.confirmation,
      push: `${this.backendUrl_}/klarna/push?klarna_order_id={checkout.order.id}`,
      shipping_option_update: `${this.backendUrl_}/klarna/shipping`,
      address_update: `${this.backendUrl_}/klarna/address`,
    };

    if (cart.shipping_address && cart.shipping_address.first_name) {
      let shippingOptions = await this.shippingProfileService_.fetchCartOptions(cart);
      shippingOptions = shippingOptions.filter((so) => !so.data?.require_drop_point);

      if (cart.shipping_methods?.length) {
        const method = cart.shipping_methods[0];
        const taxRate = method.tax_total / (method.total - method.tax_total);
        order.selected_shipping_option = {
          id: method.shipping_option.id,
          name: method.shipping_option.name,
          price: method.total,
          tax_amount: method.tax_total,
          tax_rate: taxRate * 10000,
        };
      }

      const partitioned = shippingOptions.reduce((acc: { [key: string]: any[] }, next) => {
        acc[next.profile_id] = acc[next.profile_id] ? [...acc[next.profile_id], next] : [next];
        return acc;
      }, {});
      //@ts-ignore
      const f = (a: any[], b: any[]) => [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
      //@ts-ignore
      const cartesian = (a: any[], b: any[], ...c: any[]): any[] => (b ? cartesian(f(a, b), ...c) : a);

      const methods = Object.keys(partitioned).map((k) => partitioned[k]);
      //@ts-ignore
      const combinations = cartesian(...methods);

      const taxRate = region.tax_rate / 100;

      order.shipping_options = combinations.map((combination: any) => {
        const combArray = Array.isArray(combination) ? combination : [combination];
        const details = combArray.reduce(
          (acc: { id: string[]; name: string[]; price: number }, next: any) => {
            acc.id.push(next.id);
            acc.name.push(next.name);
            acc.price += next.amount;
            return acc;
          },
          { id: [], name: [], price: 0 }
        );

        return {
          id: details.id.join("."),
          name: details.name.join(" + "),
          price: details.price * (1 + taxRate),
          tax_amount: details.price * taxRate,
          tax_rate: taxRate * 10000,
        };
      });
    }

    return order;
  }

  private validateKlarnaOrderUrls(property: "merchant_urls" | "payment_collection_urls"): void {
    const required = ["terms", "checkout", "confirmation"];
    const isMissing = required.some((prop) => !this.options_[property]?.[prop]);

    if (isMissing) {
      throw new Error(
        `options.${property} is required to create a Klarna Order.\n` +
        `medusa-config.js file has to contain ${property} { ${required.join(", ")}}`
      );
    }
  }

  static replaceStringWithPropertyValue(string: string, obj: Record<string, any>): string {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (string.includes(`{${key}}`)) {
        string = string.replace(`{${key}}`, obj[key]);
      }
    }
    return string;
  }

  async paymentInputToKlarnaOrder(paymentInput: PaymentInput): Promise<KlarnaOrder> {
    if (paymentInput.cart) {
      this.validateKlarnaOrderUrls("merchant_urls");
      return this.cartToKlarnaOrder(paymentInput.cart);
    }

    this.validateKlarnaOrderUrls("payment_collection_urls");

    const { currency_code, amount, resource_id } = paymentInput;

    const order: KlarnaOrder = {
      merchant_data: resource_id,
      locale: "en-US",
      order_lines: [
        {
          name: "Payment Collection",
          quantity: 1,
          unit_price: amount,
          tax_rate: 0,
          total_amount: amount,
          total_tax_amount: 0,
        },
      ],
      purchase_country: "SE",
      order_amount: amount,
      order_tax_amount: 0,
      purchase_currency: currency_code.toUpperCase(),
      merchant_urls: {
        terms: KlarnaProviderService.replaceStringWithPropertyValue(
          this.options_.payment_collection_urls!.terms,
          paymentInput
        ),
        checkout: KlarnaProviderService.replaceStringWithPropertyValue(
          this.options_.payment_collection_urls!.checkout,
          paymentInput
        ),
        confirmation: KlarnaProviderService.replaceStringWithPropertyValue(
          this.options_.payment_collection_urls!.confirmation,
          paymentInput
        ),
        push: `${this.backendUrl_}/klarna/push?klarna_order_id={checkout.order.id}`,
      },
    };

    return order;
  }

  async getStatus(paymentData: PaymentData): Promise<string> {
    const { order_id } = paymentData;
    const { data: order } = await this.klarna_.get(`${this.klarnaOrderUrl_}/${order_id}`);

    let status = "pending";
    if (order.status === "checkout_complete") {
      status = "authorized";
    }
    return status;
  }

  async createPayment(cart: Cart): Promise<any> {
    try {
      const order = await this.cartToKlarnaOrder(cart);
      const { data } = await this.klarna_.post(this.klarnaOrderUrl_, order);
      return data;
    } catch (error) {
      this.logger_.error(error);
      throw error;
    }
  }

  async retrievePayment(paymentData: PaymentData): Promise<any> {
    try {
      const { data } = await this.klarna_.get(`${this.klarnaOrderUrl_}/${paymentData.order_id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPaymentData(sessionData: { data: PaymentData }): Promise<any> {
    try {
      const { data } = await this.klarna_.get(`${this.klarnaOrderUrl_}/${sessionData.data.order_id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async retrieveCompletedOrder(klarnaOrderId: string): Promise<any> {
    try {
      const { data } = await this.klarna_.get(`${this.klarnaOrderManagementUrl_}/${klarnaOrderId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async authorizePayment(
    sessionData: { data: PaymentData },
    context: Record<string, any> = {}
  ): Promise<{ data: PaymentData; status: string }> {
    try {
      const paymentStatus = await this.getStatus(sessionData.data);
      return { data: sessionData.data, status: paymentStatus };
    } catch (error) {
      throw error;
    }
  }

  async acknowledgeOrder(klarnaOrderId: string, orderId: string | null = null): Promise<string> {
    try {
      await this.klarna_.post(`${this.klarnaOrderManagementUrl_}/${klarnaOrderId}/acknowledge`);
      if (orderId !== null) {
        await this.klarna_.patch(
          `${this.klarnaOrderManagementUrl_}/${klarnaOrderId}/merchant-references`,
          { merchant_reference1: orderId }
        );
      }
      return klarnaOrderId;
    } catch (error) {
      throw error;
    }
  }

  async addOrderToKlarnaOrder(klarnaOrderId: string, orderId: string): Promise<string> {
    try {
      await this.klarna_.post(
        `${this.klarnaOrderManagementUrl_}/${klarnaOrderId}/merchant-references`,
        { merchant_reference1: orderId }
      );
      return klarnaOrderId;
    } catch (error) {
      throw error;
    }
  }

  async updatePaymentData(sessionData: PaymentData, update: Partial<PaymentData>): Promise<PaymentData> {
    try {
      return { ...sessionData, ...update };
    } catch (error) {
      throw error;
    }
  }

  async updatePayment(paymentData: any, cart: Cart): Promise<any> {
    if (cart.total !== paymentData.order_amount) {
      const order = await this.cartToKlarnaOrder(cart);
      try {
        const { data } = await this.klarna_.post(`${this.klarnaOrderUrl_}/${paymentData.order_id}`, order);
        return data;
      } catch (_) {
        const { data } = await this.klarna_.post(this.klarnaOrderUrl_, order);
        return data;
      }
    }
    return paymentData;
  }

  async capturePayment(payment: { data: PaymentData }): Promise<any> {
    const { order_id } = payment.data;
    try {
      const { data: order } = await this.klarna_.get(`${this.klarnaOrderManagementUrl_}/${order_id}`);
      const { order_amount } = order;

      await this.klarna_.post(`${this.klarnaOrderManagementUrl_}/${order_id}/captures`, {
        captured_amount: order_amount,
      });
      return this.retrieveCompletedOrder(order_id);
    } catch (error) {
      throw error;
    }
  }

  async refundPayment(payment: { data: PaymentData }, amountToRefund: number): Promise<any> {
    const { order_id } = payment.data;
    try {
      await this.klarna_.post(`${this.klarnaOrderManagementUrl_}/${order_id}/refunds`, {
        refunded_amount: amountToRefund,
      });
      return this.retrieveCompletedOrder(order_id);
    } catch (error) {
      throw error;
    }
  }

  async cancelPayment(payment: { data: PaymentData }): Promise<any> {
    const { order_id } = payment.data;
    try {
      await this.klarna_.post(`${this.klarnaOrderManagementUrl_}/${order_id}/cancel`);
      return this.retrieveCompletedOrder(order_id);
    } catch (error) {
      throw error;
    }
  }

  async deletePayment(_: any): Promise<void> {
    return Promise.resolve();
  }
}

export default KlarnaProviderService;