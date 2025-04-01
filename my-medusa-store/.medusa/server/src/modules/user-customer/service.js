"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCustomerSerivce = void 0;
const utils_1 = require("@medusajs/framework/utils");
const user_customer_model_1 = require("./models/user_customer.model");
class UserCustomerSerivce extends (0, utils_1.MedusaService)({
    user_customer: user_customer_model_1.user_customer
}) {
    constructor(args) {
        super(args);
    }
}
exports.UserCustomerSerivce = UserCustomerSerivce;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXItY3VzdG9tZXIvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBMEQ7QUFDMUQsc0VBQTZEO0FBSTdELE1BQWEsbUJBQW9CLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQ2hELGFBQWEsRUFBRSxtQ0FBYTtDQUNsQyxDQUFDO0lBQ0ssWUFBWSxJQUFTO1FBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xCLENBQUM7Q0FDUDtBQU5ELGtEQU1DO0FBQUEsQ0FBQyJ9