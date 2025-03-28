"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_entity_1 = require("../../entities/customer.entity");
const tenant_entity_1 = require("../../entities/tenant.entity");
const user_entity_1 = require("../../entities/user.entity");
const enums_1 = require("../../types/enums");
const tenant_utils_1 = require("../../utility/tenant-utils");
const user_license_1 = require("../user-license/user-license");
class TenantService {
    constructor({ manager }) {
        this.manager = manager;
    }
    async createTenant(name, customerName) {
        const tenant = await this.createTenantWithCustomer(name, customerName);
        return tenant;
    }
    async getTenantById(id) {
        const tenant = await this.findTenantById(id, true);
        return tenant ? tenant_utils_1.TenantUtils.mapTenantToDTO(tenant) : null;
    }
    async addUserToTenant(tenantId, licenseType) {
        return this.createUserForTenant(tenantId, licenseType);
    }
    async getUsersByTenantId(tenantId) {
        const tenant = await this.findTenantById(tenantId, true);
        if (!tenant)
            throw new Error("Tenant not found");
        return tenant.users.getItems();
    }
    async createTenantWithCustomer(name, customerName) {
        const tenantRepo = this.manager.getRepository(tenant_entity_1.Tenant);
        const customerRepo = this.manager.getRepository(customer_entity_1.Customer);
        const customer = customerRepo.create({
            name: customerName,
            deploymentType: enums_1.DeploymentType.RefractedSaaS,
            createdAt: new Date(),
            licenseStatus: enums_1.LicenseStatus.pending
        });
        await this.manager.persistAndFlush(customer);
        const tenant = tenantRepo.create({
            name,
            customer,
            customerId: customer.id,
            createdAt: new Date()
        });
        await this.manager.persistAndFlush(tenant);
        return tenant;
    }
    async findTenantById(id, loadRelations = false) {
        const tenantRepo = this.manager.getRepository(tenant_entity_1.Tenant);
        const tenant = await tenantRepo.findOne({ id }, {
            populate: loadRelations ? ["customer", "users"] : [],
        });
        return tenant || null;
    }
    async createUserForTenant(tenantId, licenseType) {
        const tenantRepo = this.manager.getRepository(tenant_entity_1.Tenant);
        const userRepo = this.manager.getRepository(user_entity_1.User);
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const tenant = await this.findTenantById(tenantId);
        if (!tenant)
            throw new Error("Tenant not found");
        let license = await licenseRepo.findOne({ type: licenseType });
        if (!license) {
            license = licenseRepo.create({
                type: licenseType,
                pricePerMonth: this.getLicensePrice(licenseType),
                organizations: "unlimited",
                assessments: "unlimited",
                assets: this.getAssetLimit(licenseType),
                scopesAccess: licenseType !== enums_1.UserLicenseType.PenetrationTesterBasic,
                integrations: this.getIntegrationLevel(licenseType),
                scanUploadLimit: "unlimited",
                maxScansStored: 100,
                queuePriority: this.getQueuePriority(licenseType),
                guestAccounts: 0,
            });
            await this.manager.persistAndFlush(license);
        }
        const user = userRepo.create({ tenant, license, createdAt: new Date(), licenseId: license.id, tenantId: tenant.id });
        await this.manager.persistAndFlush(user);
        return user;
    }
    getLicensePrice(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return 0;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return 30;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return 50;
        }
    }
    getAssetLimit(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return 100;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return 10000;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return 100000;
        }
    }
    getIntegrationLevel(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return enums_1.IntegrationLevel.limited;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return enums_1.IntegrationLevel.dataInput;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return enums_1.IntegrationLevel.full;
            default: return enums_1.IntegrationLevel.none;
        }
    }
    getQueuePriority(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic
            ? enums_1.QueuePriority.low
            : enums_1.QueuePriority.high;
    }
}
TenantService.identifier = "TenantService";
exports.default = TenantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvdGVuYW50L3RlbmFudC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0VBQTBEO0FBQzFELGdFQUFzRDtBQUN0RCw0REFBa0Q7QUFDbEQsNkNBQW9IO0FBQ3BILDZEQUF5RDtBQUN6RCwrREFBMkQ7QUFFM0QsTUFBTSxhQUFhO0lBSWpCLFlBQVksRUFBRSxPQUFPLEVBQUU7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBWSxFQUFFLFlBQW9CO1FBQ25ELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFVO1FBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLDBCQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQ25CLFFBQWdCLEVBQ2hCLFdBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQWdCO1FBQ3ZDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU07WUFB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