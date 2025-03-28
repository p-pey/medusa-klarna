"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const tenant_service_1 = __importDefault(require("./tenant-service"));
class TenantProvider {
    constructor() {
        this.Tenant = new tenant_service_1.default({ manager: core_1.EntityManager });
    }
    validateOptions(options) { }
}
exports.default = (0, utils_1.ModuleProvider)("TenantService", {
    services: [TenantProvider],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvdGVuYW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQTJEO0FBQzNELDBDQUFnRDtBQUNoRCxzRUFBNkM7QUFHN0MsTUFBTSxjQUFjO0lBRWI7UUFDTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksd0JBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsZUFBZSxDQUFDLE9BQVcsSUFBSSxDQUFDO0NBQ3RDO0FBRUQsa0JBQWUsSUFBQSxzQkFBYyxFQUFDLGVBQWUsRUFBRTtJQUN4QyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FFaEMsQ0FBQyxDQUFDIn0=