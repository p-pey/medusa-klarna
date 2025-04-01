import { MedusaService } from "@medusajs/framework/utils";
import { tenant } from "./models/tenant.model";

export class TenantService extends MedusaService({
       tenant: tenant
}) {
       constructor(args: any) {
              super(args)
       }
};