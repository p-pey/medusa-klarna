"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.License = void 0;
const utils_1 = require("@medusajs/framework/utils");
const enums_1 = require("../../../types/enums");
exports.License = utils_1.model.define("license", {
    id: utils_1.model.id().primaryKey(),
    type: utils_1.model.enum(enums_1.UserLicenseType),
    pricePerMonth: utils_1.model.number(),
    organizations: utils_1.model.text(), // "unlimited" or a number as string
    assessments: utils_1.model.text(), // "unlimited" or a number as string
    assets: utils_1.model.number(),
    scopesAccess: utils_1.model.boolean(),
    integrations: utils_1.model.enum(enums_1.IntegrationLevel),
    scanUploadLimit: utils_1.model.text(), // "unlimited" or number in MB as string
    maxScansStored: utils_1.model.number(),
    queuePriority: utils_1.model.enum(enums_1.QueuePriority),
    guestAccounts: utils_1.model.number(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGljZW5zZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2xpY2Vuc2UvbW9kZWxzL2xpY2Vuc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELGdEQUErRztBQUVsRyxRQUFBLE9BQU8sR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtJQUN4QyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyx1QkFBbUIsQ0FBQztJQUNyQyxhQUFhLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUM3QixhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFFLG9DQUFvQztJQUNqRSxXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFFLG9DQUFvQztJQUMvRCxNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN0QixZQUFZLEVBQUUsYUFBSyxDQUFDLE9BQU8sRUFBRTtJQUM3QixZQUFZLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyx3QkFBZ0IsQ0FBQztJQUMxQyxlQUFlLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFFLHdDQUF3QztJQUN2RSxjQUFjLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUM5QixhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDO0lBQ3hDLGFBQWEsRUFBRSxhQUFLLENBQUMsTUFBTSxFQUFFO0NBRW5DLENBQUMsQ0FBQyJ9