import { Module } from "@medusajs/framework/utils";
import { LicenseService } from './service';

export const LICENSE_MODULE = "license";


export default Module(LICENSE_MODULE, {
       service: LicenseService
})
