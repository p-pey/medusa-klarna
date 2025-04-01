import { Module } from "@medusajs/framework/utils";
import { TenantService } from './service';

export const Tenant_MODULE = "tenant";


export default Module(Tenant_MODULE, {
       service: TenantService
})
