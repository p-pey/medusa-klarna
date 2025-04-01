"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_customer = void 0;
const utils_1 = require("@medusajs/framework/utils");
const enums_1 = require("../../../types/enums");
exports.user_customer = utils_1.model.define("user_customer", {
    id: utils_1.model.id().primaryKey(),
    deploymentType: utils_1.model.enum(enums_1.DeploymentType),
    name: utils_1.model.text(),
    licenseStatus: utils_1.model.enum(enums_1.LicenseStatus).default(enums_1.LicenseStatus.pending),
    // tenant: model.hasOne(() => Tenant, {
    //        mappedBy: "user_customer",
    //        nullable: true,
    // }),
    partnershipType: utils_1.model.enum(enums_1.PartnershipType).nullable(),
    discountPercentage: utils_1.model.number().nullable(),
    platformCost: utils_1.model.number().nullable(),
    flatFee: utils_1.model.number().nullable(),
    supportPlanType: utils_1.model.text().nullable(),
    supportCostPerMonth: utils_1.model.number().nullable(),
    totalCostPerMonth: utils_1.model.number().default(0),
    createdAt: utils_1.model.dateTime(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9jdXN0b21lci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXItY3VzdG9tZXIvbW9kZWxzL3VzZXJfY3VzdG9tZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELGdEQUFzRjtBQUV6RSxRQUFBLGFBQWEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtJQUNwRCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixjQUFjLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxzQkFBYyxDQUFDO0lBQzFDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ2xCLGFBQWEsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdkUsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLGVBQWUsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLHVCQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDdkQsa0JBQWtCLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QyxZQUFZLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN2QyxPQUFPLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxlQUFlLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN4QyxtQkFBbUIsRUFBRSxhQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlDLGlCQUFpQixFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLFNBQVMsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0NBQ2pDLENBQUMsQ0FBQyJ9