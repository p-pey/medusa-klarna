import {
       AuthorizePaymentInput,
       AuthorizePaymentOutput,
       CancelPaymentInput,
       CancelPaymentOutput,
       CapturePaymentInput,
       CapturePaymentOutput,
       DeletePaymentInput,
       DeletePaymentOutput,
       GetPaymentStatusInput,
       GetPaymentStatusOutput,
       InitiatePaymentInput,
       InitiatePaymentOutput,
       PaymentSessionStatus,
       ProviderWebhookPayload,
       RefundPaymentInput,
       RefundPaymentOutput,
       RetrievePaymentInput,
       RetrievePaymentOutput,
       UpdatePaymentInput,
       UpdatePaymentOutput,
       WebhookActionResult,
} from "@medusajs/framework/types";
import { AbstractPaymentProvider, BigNumber, MedusaError } from "@medusajs/framework/utils";
import { Logger } from "@medusajs/medusa";
import axios, { AxiosInstance } from "axios";

type InjectedDependencies = {
       logger: Logger;
};

type Options = {
       url: string;
       apiKey: string;
       user: string;
       password: string;
       merchant_urls?: {
              terms: string;
              checkout: string;
              confirmation: string;
       };
       backend_url?: string;
};

class KlarnaModuleService extends AbstractPaymentProvider<Options> {
       static identifier = "klarna";
       protected logger_: Logger;
       protected options_: Options;
       private klarnaOrderUrl_: string = "/checkout/v3/orders";
       private klarnaOrderManagementUrl_: string = "/ordermanagement/v1/orders";
       protected client: AxiosInstance;

       constructor(container: InjectedDependencies, options: Options) {
              super(container, options);

              this.logger_ = container.logger;
              this.options_ = options;
              this.logger_.info("[Klarna Service]: Registered");

              this.client = axios.create({
                     baseURL: options.url,
                     auth: {
                            username: options.user,
                            password: options.password,
                     },
              });
       }

       static validateOptions(options: Record<string, any>) {
              if (!options.url || !options.user || !options.password) {
                     throw new MedusaError(
                            MedusaError.Types.INVALID_DATA,
                            "Klarna provider requires url, user, and password in options."
                     );
              }
       }

       async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
              const externalId = input.data?.id as string;
              try {
                     const { data: order } = await this.client.get(`${this.klarnaOrderManagementUrl_}/${externalId}`);
                     const { order_amount } = order;

                     await this.client.post(`${this.klarnaOrderManagementUrl_}/${externalId}/captures`, {
                            captured_amount: order_amount,
                     });
                     const newData = await this.retrieveCompletedOrder(externalId);
                     return { data: newData };
              } catch (error) {
                     throw error;
              }
       }

       async retrieveCompletedOrder(klarnaOrderId: string): Promise<any> {
              try {
                     const { data } = await this.client.get(`${this.klarnaOrderManagementUrl_}/${klarnaOrderId}`);
                     return data;
              } catch (error) {
                     throw error;
              }
       }

       async authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput> {
              try {
                     const externalId = input.data?.id as string;
                     const paymentStatus = await this.getStatus(externalId);
                     return { data: input.data, status: paymentStatus };
              } catch (error) {
                     throw error;
              }
       }

       async getStatus(externalId: string): Promise<PaymentSessionStatus> {
              const { data: order } = await this.client.get(`${this.klarnaOrderUrl_}/${externalId}`);

              let status: PaymentSessionStatus = "pending";
              if (order.status === "checkout_complete") {
                     status = "authorized";
              }
              return status;
       }

       async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
              try {
                     const externalId = input.data?.id as string;
                     await this.client.post(`${this.klarnaOrderManagementUrl_}/${externalId}/cancel`);
                     return { data: await this.retrieveCompletedOrder(externalId) };
              } catch (error) {
                     throw error;
              }
       }

       async initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
              const { amount, currency_code, context } = input;
              const customer = context!.customer;

              const order = {
                     purchase_country: customer?.billing_address?.country_code?.toUpperCase() || "SE",
                     purchase_currency: currency_code.toUpperCase(),
                     order_amount: amount,
                     order_tax_amount: 0,
                     order_lines: [
                            {
                                   name: "Payment",
                                   quantity: 1,
                                   unit_price: amount,
                                   tax_rate: 0,
                                   total_amount: amount,
                                   total_tax_amount: 0,
                            },
                     ],
                     merchant_urls: {
                            terms: this.options_.merchant_urls?.terms || "http://example.com/terms",
                            checkout: this.options_.merchant_urls?.checkout || "http://example.com/checkout",
                            confirmation: this.options_.merchant_urls?.confirmation || "http://example.com/confirmation",
                            push: `${this.options_.backend_url || "http://localhost:9000"}/klarna/push?klarna_order_id={checkout.order.id}`,
                     },
                     billing_address: customer?.billing_address
                            ? {
                                   email: customer.email,
                                   street_address: customer.billing_address.address_1,
                                   street_address2: customer.billing_address.address_2 || undefined,
                                   postal_code: customer.billing_address.postal_code,
                                   city: customer.billing_address.city,
                                   country: customer.billing_address.country_code,
                            }
                            : undefined,
              };

              try {
                     const { data } = await this.client.post(this.klarnaOrderUrl_, order);
                     return {
                            id: data.order_id,
                            data,
                     };
              } catch (error) {
                     this.logger_.error(`Failed to initiate Klarna payment: ${error}`);
                     throw error;
              }
       }

       async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
              try {
                     const externalId = input.data?.id as string;
                     await this.client.post(`${this.klarnaOrderManagementUrl_}/${externalId}/cancel`);
                     return { data: await this.retrieveCompletedOrder(externalId) };
              } catch (error) {
                     throw error;
              }
       }

       async getPaymentStatus(input: GetPaymentStatusInput): Promise<GetPaymentStatusOutput> {
              const externalId = input.data?.id as string;
              const status = await this.getStatus(externalId);

              switch (status) {
                     case "authorized":
                            return { status: "authorized" };
                     case "captured":
                            return { status: "captured" };
                     case "canceled":
                            return { status: "canceled" };
                     default:
                            return { status: "pending" };
              }
       }

       async refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput> {
              try {
                     const externalId = input.data?.id as string;
                     await this.client.post(`${this.klarnaOrderManagementUrl_}/${externalId}/refunds`, {
                            refunded_amount: input.amount,
                     });
                     return { data: await this.retrieveCompletedOrder(externalId) };
              } catch (error) {
                     throw error;
              }
       }

       async retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
              try {
                     const externalId = input.data?.id as string;
                     const { data } = await this.client.get(`${this.klarnaOrderUrl_}/${externalId}`);
                     return data;
              } catch (error) {
                     throw error;
              }
       }

       async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
              const { amount, currency_code, context } = input;
              const customer = context!.customer;
              const externalId = input.data?.id as string;

              // Fetch the current order to compare amounts
              let currentOrder;
              try {
                     const { data } = await this.client.get(`${this.klarnaOrderUrl_}/${externalId}`);
                     currentOrder = data;
              } catch (error) {
                     this.logger_.error(`Failed to retrieve current Klarna order: ${error}`);
                     throw error;
              }

              // Check if the amount has changed
              if (currentOrder.order_amount !== amount) {
                     // Construct updated order data
                     const updatedOrder = {
                            purchase_country: customer?.billing_address?.country_code?.toUpperCase() || currentOrder.purchase_country,
                            purchase_currency: currency_code.toUpperCase(),
                            order_amount: amount,
                            order_tax_amount: 0, // Adjust if tax is provided in context
                            order_lines: [
                                   {
                                          name: "Updated Payment",
                                          quantity: 1,
                                          unit_price: amount,
                                          tax_rate: 0,
                                          total_amount: amount,
                                          total_tax_amount: 0,
                                   },
                            ],
                            merchant_urls: {
                                   terms: this.options_.merchant_urls?.terms || "http://example.com/terms",
                                   checkout: this.options_.merchant_urls?.checkout || "http://example.com/checkout",
                                   confirmation: this.options_.merchant_urls?.confirmation || "http://example.com/confirmation",
                                   push: `${this.options_.backend_url || "http://localhost:9000"}/klarna/push?klarna_order_id={checkout.order.id}`,
                            },
                            billing_address: customer?.billing_address
                                   ? {
                                          email: customer.email,
                                          street_address: customer.billing_address.address_1,
                                          street_address2: customer.billing_address.address_2 || undefined,
                                          postal_code: customer.billing_address.postal_code,
                                          city: customer.billing_address.city,
                                          country: customer.billing_address.country_code,
                                   }
                                   : currentOrder.billing_address,
                     };

                     try {
                            // Attempt to update the existing order
                            const { data } = await this.client.post(`${this.klarnaOrderUrl_}/${externalId}`, updatedOrder);
                            return data;
                     } catch (error) {
                            this.logger_.error(`Failed to update Klarna order, creating new one: ${error}`);
                            // If update fails (e.g., order is completed), create a new order
                            const { data } = await this.client.post(this.klarnaOrderUrl_, updatedOrder);
                            return data;
                     }
              }

              // If no update is needed, return the current order data
              return currentOrder;
       }

       async getWebhookActionAndData(payload: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
              const { data } = payload;

              try {
                     switch (data.event_type) {
                            case "authorized_amount":
                                   return {
                                          action: "authorized",
                                          data: {
                                                 session_id: (data.metadata as Record<string, any>).session_id,
                                                 amount: new BigNumber(data.amount as number),
                                          },
                                   };
                            case "success":
                                   return {
                                          action: "captured",
                                          data: {
                                                 session_id: (data.metadata as Record<string, any>).session_id,
                                                 amount: new BigNumber(data.amount as number),
                                          },
                                   };
                            default:
                                   return { action: "not_supported" };
                     }
              } catch (e) {
                     return {
                            action: "failed",
                            data: {
                                   session_id: (data.metadata as Record<string, any>).session_id,
                                   amount: new BigNumber(data.amount as number),
                            },
                     };
              }
       }
}

export default KlarnaModuleService;