"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantService = void 0;
const utils_1 = require("@medusajs/framework/utils");
const tenant_model_1 = require("./models/tenant.model");
class TenantService extends (0, utils_1.MedusaService)({
    tenant: tenant_model_1.tenant
}) {
    constructor(args) {
        super(args);
    }
}
exports.TenantService = TenantService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3RlbmFudC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEwRDtBQUMxRCx3REFBK0M7QUFFL0MsTUFBYSxhQUFjLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQzFDLE1BQU0sRUFBRSxxQkFBTTtDQUNwQixDQUFDO0lBQ0ssWUFBWSxJQUFTO1FBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xCLENBQUM7Q0FDUDtBQU5ELHNDQU1DO0FBQUEsQ0FBQyJ9