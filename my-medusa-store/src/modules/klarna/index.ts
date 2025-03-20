import {
       ModuleProvider,
       Modules
} from "@medusajs/framework/utils"
import KlarnaPaymentModuleService from "./service"

export default ModuleProvider(Modules.PAYMENT, {
       services: [KlarnaPaymentModuleService],
})