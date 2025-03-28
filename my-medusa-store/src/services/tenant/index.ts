import { ModuleProvider } from "@medusajs/framework/utils";
import TenantService from "./tenant-service";

export const TENANT_MODULE = "tenantModule";


export default ModuleProvider(TENANT_MODULE, {
       services: [TenantService],
})