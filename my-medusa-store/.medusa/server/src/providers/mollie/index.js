"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const services_1 = require("./services");
const services = [
    services_1.MollieApplePayService,
    services_1.MollieBancontactService,
    services_1.MollieCardService,
    services_1.MollieGiftcardService,
    services_1.MollieIdealService,
    services_1.MolliePaypalService,
    services_1.MollieProviderService,
];
exports.default = (0, utils_1.ModuleProvider)(utils_1.Modules.PAYMENT, {
    services,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL21vbGxpZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFvRTtBQUVwRSx5Q0FRb0I7QUFFcEIsTUFBTSxRQUFRLEdBQUc7SUFDZixnQ0FBcUI7SUFDckIsa0NBQXVCO0lBQ3ZCLDRCQUFpQjtJQUNqQixnQ0FBcUI7SUFDckIsNkJBQWtCO0lBQ2xCLDhCQUFtQjtJQUNuQixnQ0FBcUI7Q0FDdEIsQ0FBQztBQUVGLGtCQUFlLElBQUEsc0JBQWMsRUFBQyxlQUFPLENBQUMsT0FBTyxFQUFFO0lBQzdDLFFBQVE7Q0FDVCxDQUFDLENBQUMifQ==