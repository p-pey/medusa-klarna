"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLicenseUtils = void 0;
const core_1 = require("@mikro-orm/core");
class UserLicenseUtils {
    static mapUserToDTO(user) {
        const userEntity = (0, core_1.wrap)(user).toObject();
        return {
            id: userEntity.id,
            tenantId: userEntity.tenantId,
            licenseId: userEntity.licenseId,
            licenseType: user.license.type,
            createdAt: userEntity.createdAt,
        };
    }
    static mapUserLicenseToDTO(license) {
        const licenseEntity = (0, core_1.wrap)(license).toObject();
        return {
            id: licenseEntity.id,
            type: licenseEntity.type,
            pricePerMonth: licenseEntity.pricePerMonth,
            organizations: licenseEntity.organizations,
            assessments: licenseEntity.assessments,
            assets: licenseEntity.assets,
            scopesAccess: licenseEntity.scopesAccess,
            integrations: licenseEntity.integrations,
            scanUploadLimit: licenseEntity.scanUploadLimit,
            maxScansStored: licenseEntity.maxScansStored,
            queuePriority: licenseEntity.queuePriority,
            guestAccounts: licenseEntity.guestAccounts,
            userCount: license.users.isInitialized() ? license.users.count() : 0,
        };
    }
    static findUsersByLicenseType(users, licenseType) {
        return users.getItems().filter((user) => user.license.type === licenseType);
    }
}
exports.UserLicenseUtils = UserLicenseUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWNlbnNlLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdHkvdXNlci1saWNlbnNlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFtRDtBQUtuRCxNQUFhLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQVU7UUFDNUIsTUFBTSxVQUFVLEdBQUcsSUFBQSxXQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsT0FBTztZQUNMLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTtZQUNqQixRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVE7WUFDN0IsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTO1lBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDOUIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTO1NBQ2hDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQW9CO1FBQzdDLE1BQU0sYUFBYSxHQUFHLElBQUEsV0FBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9DLE9BQU87WUFDTCxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO1lBQ3hCLGFBQWEsRUFBRSxhQUFhLENBQUMsYUFBYTtZQUMxQyxhQUFhLEVBQUUsYUFBYSxDQUFDLGFBQWE7WUFDMUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxXQUFXO1lBQ3RDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTTtZQUM1QixZQUFZLEVBQUUsYUFBYSxDQUFDLFlBQVk7WUFDeEMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxZQUFZO1lBQ3hDLGVBQWUsRUFBRSxhQUFhLENBQUMsZUFBZTtZQUM5QyxjQUFjLEVBQUUsYUFBYSxDQUFDLGNBQWM7WUFDNUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxhQUFhO1lBQzFDLGFBQWEsRUFBRSxhQUFhLENBQUMsYUFBYTtZQUMxQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FDM0IsS0FBdUIsRUFDdkIsV0FBNEI7UUFFNUIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0Y7QUFyQ0QsNENBcUNDIn0=