import { Module } from "@medusajs/framework/utils";
import { UserCustomerSerivce } from "./service";

export const CUSTOMER_MODULE = "user_customer";


export default Module(CUSTOMER_MODULE, {
       service: UserCustomerSerivce
})
