"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLicenseService = void 0;
const tenant_entity_1 = require("../../entities/tenant.entity");
const user_entity_1 = require("../../entities/user.entity");
const enums_1 = require("../../types/enums");
const user_license_utils_1 = require("../../utility/user-license-utils");
const user_license_1 = require("./user-license");
class UserLicenseService {
    constructor({ manager }) {
        this.manager = manager;
    }
    async createUser(tenantId, licenseType) {
        return this.createUserWithLicense(tenantId, licenseType);
    }
    async getUserById(id) {
        const user = await this.findUserById(id, true);
        return user ? user_license_utils_1.UserLicenseUtils.mapUserToDTO(user) : null;
    }
    async getLicenseById(id) {
        const license = await this.findLicenseById(id, true);
        return license ? user_license_utils_1.UserLicenseUtils.mapUserLicenseToDTO(license) : null;
    }
    async updateUserLicense(userId, licenseType) {
        return this.assignNewLicenseToUser(userId, licenseType);
    }
    async getUsersByLicenseType(licenseType) {
        const license = await this.findLicenseByType(licenseType, true);
        if (!license)
            throw new Error("License type not found");
        return user_license_utils_1.UserLicenseUtils.findUsersByLicenseType(license.users, licenseType);
    }
    async createLicense(licenseType) {
        return this.createUserLicense(licenseType);
    }
    async createUserWithLicense(tenantId, licenseType) {
        const tenantRepo = this.manager.getRepository(tenant_entity_1.Tenant);
        const userRepo = this.manager.getRepository(user_entity_1.User);
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const tenant = await tenantRepo.findOne({ id: tenantId });
        if (!tenant)
            throw new Error("Tenant not found");
        let license = await licenseRepo.findOne({ type: licenseType });
        if (!license) {
            license = await this.createUserLicense(licenseType);
        }
        const user = userRepo.create({
            tenant,
            tenantId: tenant.id,
            license,
            licenseId: license.id,
            createdAt: new Date(),
        });
        await this.manager.persistAndFlush(user);
        return user;
    }
    async findUserById(id, loadRelations = false) {
        const userRepo = this.manager.getRepository(user_entity_1.User);
        const user = await userRepo.findOne({ id }, { populate: loadRelations ? ["tenant", "license"] : [] });
        return user || null;
    }
    async findLicenseById(id, loadRelations = false) {
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const license = await licenseRepo.findOne({ id }, { populate: loadRelations ? ["users"] : [] });
        return license || null;
    }
    async findLicenseByType(type, loadRelations = false) {
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const license = await licenseRepo.findOne({ type }, { populate: loadRelations ? ["users"] : [] });
        return license || null;
    }
    async assignNewLicenseToUser(userId, licenseType) {
        const userRepo = this.manager.getRepository(user_entity_1.User);
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const user = await this.findUserById(userId, true);
        if (!user)
            throw new Error("User not found");
        let license = await licenseRepo.findOne({ type: licenseType });
        if (!license) {
            license = await this.createUserLicense(licenseType);
        }
        user.license = license;
        await this.manager.persistAndFlush(user);
        return user;
    }
    async createUserLicense(licenseType) {
        const licenseRepo = this.manager.getRepository(user_license_1.UserLicense);
        const license = licenseRepo.create({
            type: licenseType,
            pricePerMonth: this.getLicensePrice(licenseType),
            organizations: this.getOrganizationsLimit(licenseType),
            assessments: this.getAssessmentsLimit(licenseType),
            assets: this.getAssetLimit(licenseType),
            scopesAccess: this.getScopesAccess(licenseType),
            integrations: this.getIntegrationLevel(licenseType),
            scanUploadLimit: this.getScanUploadLimit(licenseType),
            maxScansStored: this.getMaxScansStored(licenseType),
            queuePriority: this.getQueuePriority(licenseType),
            guestAccounts: this.getGuestAccounts(licenseType),
        });
        await this.manager.persistAndFlush(license);
        return license;
    }
    getLicensePrice(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return 0;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return 30;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return 50;
            default: return 0;
        }
    }
    getOrganizationsLimit(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic ? "1" : "unlimited";
    }
    getAssessmentsLimit(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic ? "1" : "unlimited";
    }
    getAssetLimit(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return 100;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return 10000;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return 100000;
            default: return 0;
        }
    }
    getScopesAccess(licenseType) {
        return licenseType !== enums_1.UserLicenseType.PenetrationTesterBasic;
    }
    getIntegrationLevel(licenseType) {
        switch (licenseType) {
            case enums_1.UserLicenseType.PenetrationTesterBasic:
                return enums_1.IntegrationLevel.limited;
            case enums_1.UserLicenseType.PenetrationTesterPlus:
                return enums_1.IntegrationLevel.dataInput;
            case enums_1.UserLicenseType.VulnerabilityManager:
                return enums_1.IntegrationLevel.full;
        }
    }
    getScanUploadLimit(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic ? "100" : "unlimited";
    }
    getMaxScansStored(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic ? 5 : 100;
    }
    getQueuePriority(licenseType) {
        return licenseType === enums_1.UserLicenseType.PenetrationTesterBasic
            ? enums_1.QueuePriority.low
            : enums_1.QueuePriority.high;
    }
    getGuestAccounts(licenseType) {
        return licenseType === enums_1.UserLicenseType.VulnerabilityManager ? 5 : 0;
    }
}
exports.UserLicenseService = UserLicenseService;
UserLicenseService.identifier = "UserLicenseService";
exports.default = UserLicenseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWNlbnNlLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvdXNlci1saWNlbnNlL3VzZXItbGljZW5zZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdFQUFzRDtBQUN0RCw0REFBa0Q7QUFDbEQsNkNBQXFGO0FBQ3JGLHlFQUFvRTtBQUNwRSxpREFBNkM7QUFFN0MsTUFBYSxrQkFBa0I7SUFHN0IsWUFBWSxFQUFFLE9BQU8sRUFBRTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFnQixFQUFFLFdBQTRCO1FBQzdELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFVO1FBQzFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFDQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQVU7UUFDN0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMscUNBQWdCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxXQUE0QjtRQUNsRSxPQUFPLElBQUksQ0FBQyxz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