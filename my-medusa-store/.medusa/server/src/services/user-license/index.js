"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const user_license_service_1 = __importDefault(require("./user-license-service"));
class UserProvider {
    constructor() {
        this.User = new user_license_service_1.default({ manager: core_1.EntityManager });
    }
    validateOptions(options) { }
}
exports.default = (0, utils_1.ModuleProvider)("UserService", {
    services: [UserProvider]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvdXNlci1saWNlbnNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQTJEO0FBQzNELDBDQUFnRDtBQUNoRCxrRkFBd0Q7QUFHeEQsTUFBTSxZQUFZO0lBRVg7UUFDTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksOEJBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQWEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELGVBQWUsQ0FBQyxPQUFXLElBQUksQ0FBQztDQUN0QztBQUdELGtCQUFlLElBQUEsc0JBQWMsRUFBQyxhQUFhLEVBQUU7SUFDdEMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO0NBQzlCLENBQUMsQ0FBQSJ9