import { model } from "@medusajs/framework/utils";



export const PaymentModel = model.define("appPayment", {
       id: model.id().primaryKey(),
       trackingCode: model.number()
});

export type PaymentType = typeof PaymentModel;