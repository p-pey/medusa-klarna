import { ModuleProvider } from "@medusajs/framework/utils";
import UserLicenseService from "./user-license-service";



export const USER_LICENSE_MODULE = "userModule";


export default ModuleProvider(USER_LICENSE_MODULE, {
       services: [UserLicenseService],
})