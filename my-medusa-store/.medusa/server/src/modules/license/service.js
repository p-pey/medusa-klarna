"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseService = void 0;
const utils_1 = require("@medusajs/framework/utils");
const license_model_1 = require("./models/license.model");
class LicenseService extends (0, utils_1.MedusaService)({
    license: license_model_1.License
}) {
    constructor(args) {
        super(args);
    }
    async getLicenseFromExternal(id) {
        this.createLicenses({});
        return fetch('/some');
    }
}
exports.LicenseService = LicenseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2xpY2Vuc2Uvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBMEQ7QUFDMUQsMERBQWlEO0FBSWpELE1BQWEsY0FBZSxTQUFRLElBQUEscUJBQWEsRUFBQztJQUMzQyxPQUFPLEVBQUUsdUJBQU87Q0FDdEIsQ0FBQztJQUNLLFlBQVksSUFBUztRQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBQ0QsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEVBQVU7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUV2QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ1A7QUFYRCx3Q0FXQyJ9