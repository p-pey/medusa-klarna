"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUtils = void 0;
const core_1 = require("@mikro-orm/core");
class TenantUtils {
    static mapTenantToDTO(tenant) {
        const tenantEntity = (0, core_1.wrap)(tenant).toObject();
        return {
            id: tenantEntity.id,
            name: tenantEntity.name,
            createdAt: tenantEntity.createdAt,
            customerId: tenantEntity.customerId,
            userCount: tenant.users.isInitialized() ? tenant.users.count() : 0,
        };
    }
    static findUserByLicenseType(users, licenseType) {
        return users.getItems().find((user) => user.license.type === licenseType);
    }
}
exports.TenantUtils = TenantUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdHkvdGVuYW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFtRDtBQUluRCxNQUFhLFdBQVc7SUFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFjO1FBQzdCLE1BQU0sWUFBWSxHQUFHLElBQUEsV0FBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLE9BQU87WUFDQSxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3ZCLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztZQUNqQyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFeEUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMscUJBQXFCLENBQ3JCLEtBQXVCLEVBQ3ZCLFdBQW1CO1FBRW5CLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUVQO0FBcEJELGtDQW9CQyJ9