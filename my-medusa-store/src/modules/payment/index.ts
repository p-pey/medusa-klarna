

import { Module } from "@medusajs/framework/utils";
import { AppPaymentService } from './service';

export const PAYMENT_MODULE = "app_payment";


export default Module(PAYMENT_MODULE, {
       service: AppPaymentService
})
