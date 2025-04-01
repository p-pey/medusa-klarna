import { MedusaService } from "@medusajs/framework/utils";
import { v4 } from "uuid";
import { PaymentModel } from "./models/payment.model";



export class AppPaymentService extends MedusaService({
       app_payment: PaymentModel
}) {
       constructor(args: any) {
              super(args)
       }


       async getPayment() {
              // mock
              return {
                     id: v4(),
                     trackingCode: Math.floor(Math.random() * 1000000),
                     created_at: new Date()
              }
       }

}