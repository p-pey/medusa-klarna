import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { PAYMENT_MODULE } from "../../modules/payment";
import { AppPaymentService } from "../../modules/payment/service";


export async function GET(req: MedusaRequest, res: MedusaResponse) {
       const service: AppPaymentService = req.scope.resolve(PAYMENT_MODULE);

       const payment = await service.getPayment();

       res.send(payment);
}