import { EntityManager } from "@mikro-orm/core";
import { Tenant } from "../../entities/tenant.entity";
import { User } from "../../entities/user.entity";
import { IntegrationLevel, QueuePriority, UserLicenseType } from "../../types/enums";
import { UserLicenseUtils } from "../../utility/user-license-utils";
import { UserLicense } from "./user-license";

export class UserLicenseService {
  private manager: EntityManager;
  static identifier = "UserLicenseService"
  constructor({ manager }) {
    this.manager = manager;
  }

  async createUser(tenantId: string, licenseType: UserLicenseType): Promise<User> {
    return this.createUserWithLicense(tenantId, licenseType);
  }

  async getUserById(id: string): Promise<Record<string, any> | null> {
    const user = await this.findUserById(id, true);
    return user ? UserLicenseUtils.mapUserToDTO(user) : null;
  }

  async getLicenseById(id: string): Promise<Record<string, any> | null> {
    const license = await this.findLicenseById(id, true);
    return license ? UserLicenseUtils.mapUserLicenseToDTO(license) : null;
  }

  async updateUserLicense(userId: string, licenseType: UserLicenseType): Promise<User> {
    return this.assignNewLicenseToUser(userId, licenseType);
  }

  async getUsersByLicenseType(licenseType: UserLicenseType): Promise<User[]> {
    const license = await this.findLicenseByType(licenseType, true);
    if (!license) throw new Error("License type not found");
    return UserLicenseUtils.findUsersByLicenseType(license.users, licenseType);
  }

  async createLicense(licenseType: UserLicenseType): Promise<UserLicense> {
    return this.createUserLicense(licenseType);
  }

  private async createUserWithLicense(tenantId: string, licenseType: UserLicenseType): Promise<User> {
    const tenantRepo = this.manager.getRepository(Tenant);
    const userRepo = this.manager.getRepository(User);
    const licenseRepo = this.manager.getRepository(UserLicense);

    const tenant = await tenantRepo.findOne({ id: tenantId });
    if (!tenant) throw new Error("Tenant not found");

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

  private async findUserById(id: string, loadRelations: boolean = false): Promise<User | null> {
    const userRepo = this.manager.getRepository(User);
    const user = await userRepo.findOne(
      { id },
      { populate: loadRelations ? ["tenant", "license"] : [] }
    );
    return user || null;
  }

  private async findLicenseById(id: string, loadRelations: boolean = false): Promise<UserLicense | null> {
    const licenseRepo = this.manager.getRepository(UserLicense);
    const license = await licenseRepo.findOne(
      { id },
      { populate: loadRelations ? ["users"] : [] }
    );
    return license || null;
  }

  private async findLicenseByType(type: UserLicenseType, loadRelations: boolean = false): Promise<UserLicense | null> {
    const licenseRepo = this.manager.getRepository(UserLicense);
    const license = await licenseRepo.findOne(
      { type },
      { populate: loadRelations ? ["users"] : [] }
    );
    return license || null;
  }

  private async assignNewLicenseToUser(userId: string, licenseType: UserLicenseType): Promise<User> {
    const userRepo = this.manager.getRepository(User);
    const licenseRepo = this.manager.getRepository(UserLicense);

    const user = await this.findUserById(userId, true);
    if (!user) throw new Error("User not found");

    let license = await licenseRepo.findOne({ type: licenseType });
    if (!license) {
      license = await this.createUserLicense(licenseType);
    }

    user.license = license;
    await this.manager.persistAndFlush(user);
    return user;
  }

  private async createUserLicense(licenseType: UserLicenseType): Promise<UserLicense> {
    const licenseRepo = this.manager.getRepository(UserLicense);

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

  private getLicensePrice(licenseType: UserLicenseType): number {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return 0;
      case UserLicenseType.PenetrationTesterPlus:
        return 30;
      case UserLicenseType.VulnerabilityManager:
        return 50;
      default: return 0
    }
  }

  private getOrganizationsLimit(licenseType: UserLicenseType): string {
    return licenseType === UserLicenseType.PenetrationTesterBasic ? "1" : "unlimited";
  }

  private getAssessmentsLimit(licenseType: UserLicenseType): string {
    return licenseType === UserLicenseType.PenetrationTesterBasic ? "1" : "unlimited";
  }

  private getAssetLimit(licenseType: UserLicenseType): number {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return 100;
      case UserLicenseType.PenetrationTesterPlus:
        return 10000;
      case UserLicenseType.VulnerabilityManager:
        return 100000;
      default: return 0
    }
  }

  private getScopesAccess(licenseType: UserLicenseType): boolean {
    return licenseType !== UserLicenseType.PenetrationTesterBasic;
  }

  private getIntegrationLevel(licenseType: UserLicenseType): IntegrationLevel {
    switch (licenseType) {
      case UserLicenseType.PenetrationTesterBasic:
        return IntegrationLevel.limited;
      case UserLicenseType.PenetrationTesterPlus:
        return IntegrationLevel.dataInput;
      case UserLicenseType.VulnerabilityManager:
        return IntegrationLevel.full;
    }
  }

  private getScanUploadLimit(licenseType: UserLicenseType): string {
    return licenseType === UserLicenseType.PenetrationTesterBasic ? "100" : "unlimited";
  }

  private getMaxScansStored(licenseType: UserLicenseType): number {
    return licenseType === UserLicenseType.PenetrationTesterBasic ? 5 : 100;
  }

  private getQueuePriority(licenseType: UserLicenseType): QueuePriority {
    return licenseType === UserLicenseType.PenetrationTesterBasic
      ? QueuePriority.low
      : QueuePriority.high;
  }

  private getGuestAccounts(licenseType: UserLicenseType): number {
    return licenseType === UserLicenseType.VulnerabilityManager ? 5 : 0;
  }
}

export default UserLicenseService;