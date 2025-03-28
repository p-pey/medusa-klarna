import { EntityManager } from "@mikro-orm/core";
import { Customer } from "../../entities/customer.entity";
import { Tenant } from "../../entities/tenant.entity";
import { User } from "../../entities/user.entity";
import { DeploymentType, IntegrationLevel, LicenseStatus, QueuePriority, UserLicenseType } from "../../types/enums";
import { TenantUtils } from "../../utility/tenant-utils";
import { UserLicense } from "../user-license/user-license";

class TenantService {
  private manager: EntityManager;
  static identifier = "TenantService"

  constructor({ manager }) {
    this.manager = manager;
  }

  async createTenant(name: string, customerName: string): Promise<Tenant> {
    const tenant = await this.createTenantWithCustomer(name, customerName);
    return tenant;
  }

  async getTenantById(id: string): Promise<Record<string, any> | null> {
    const tenant = await this.findTenantById(id, true);
    return tenant ? TenantUtils.mapTenantToDTO(tenant) : null;
  }

  async addUserToTenant(
    tenantId: string,
    licenseType: UserLicenseType
  ): Promise<User> {
    return this.createUserForTenant(tenantId, licenseType);
  }

  async getUsersByTenantId(tenantId: string): Promise<User[]> {
    const tenant = await this.findTenantById(tenantId, true);
    if (!tenant) throw new Error("Tenant not found");
    return tenant.users.getItems();
  }

  private async createTenantWithCustomer(name: string, customerName: string): Promise<Tenant> {
    const tenantRepo = this.manager.getRepository(Tenant);
    const customerRepo = this.manager.getRepository(Customer);

    const customer = customerRepo.create({
      name: customerName,
      deploymentType: DeploymentType.RefractedSaaS,
      createdAt: new Date(),
      licenseStatus: LicenseStatus.pending
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

  private async findTenantById(
    id: string,
    loadRelations: boolean = false
  ): Promise<Tenant | null> {
    const tenantRepo = this.manager.getRepository(Tenant);
    const tenant = await tenantRepo.findOne({ id }, {
      populate: loadRelations ? ["customer", "users"] : [],
    });
    return tenant || null;
  }

  private async createUserForTenant(
    tenantId: string,
    licenseType: UserLicenseType
  ): Promise<User> {
    const tenantRepo = this.manager.getRepository(Tenant);
    const userRepo = this.manager.getRepository(User);
    const licenseRepo = this.manager.getRepository(UserLicense);

    const tenant = await this.findTenantById(tenantId);
    if (!tenant) throw new Error("Tenant not found");

    let license = await licenseRepo.findOne({ type: licenseType });
    if (!license) {
      license = licenseRepo.create({
        type: licenseType,
        pricePerMonth: this.getLicensePrice(licenseType),
        organizations: "unlimited",
        assessments: "unlimited",
        assets: this.getAssetLimit(licenseType),
        scopesAccess: licenseType !== UserLicenseType.PenetrationTesterBasic,
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



  private getLicensePrice(licenseType: UserLicenseType): number {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return 0;
      case UserLicenseType.PenetrationTesterPlus:
        return 30;
      case UserLicenseType.VulnerabilityManager:
        return 50;
    }
  }

  private getAssetLimit(licenseType: UserLicenseType): number {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return 100;
      case UserLicenseType.PenetrationTesterPlus:
        return 10000;
      case UserLicenseType.VulnerabilityManager:
        return 100000;
    }
  }

  private getIntegrationLevel(licenseType: UserLicenseType): IntegrationLevel {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return IntegrationLevel.limited;
      case UserLicenseType.PenetrationTesterPlus:
        return IntegrationLevel.dataInput;
      case UserLicenseType.VulnerabilityManager:
        return IntegrationLevel.full;
      default: return IntegrationLevel.none
    }
  }

  private getQueuePriority(licenseType: UserLicenseType): QueuePriority {
    return licenseType === UserLicenseType.PenetrationTesterBasic
      ? QueuePriority.low
      : QueuePriority.high;
  }
}

export default TenantService;