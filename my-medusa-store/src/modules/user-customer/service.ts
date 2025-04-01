import { MedusaService } from "@medusajs/framework/utils";
import { user_customer } from "./models/user_customer.model";



export class UserCustomerSerivce extends MedusaService({
       user_customer: user_customer
}) {
       constructor(args: any) {
              super(args);
              console.log("----------------------------- User Customer Service Initialized -----------------------------");
       }
};