import { Collection, wrap } from "@mikro-orm/core";
import { User } from "../entities/user.entity";
import { UserLicense } from "../services/user-license/user-license";
import { UserLicenseType } from "../types/enums";

export class UserLicenseUtils {
  static mapUserToDTO(user: User): Record<string, any> {
    const userEntity = wrap(user).toObject();
    return {
      id: userEntity.id,
      tenantId: userEntity.tenantId,
      licenseId: userEntity.licenseId,
      licenseType: user.license.type,
      createdAt: userEntity.createdAt,
    };
  }

  static mapUserLicenseToDTO(license: UserLicense): Record<string, any> {
    const licenseEntity = wrap(license).toObject();
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

  static findUsersByLicenseType(
    users: Collection<User>,
    licenseType: UserLicenseType
  ): User[] {
    return users.getItems().filter((user) => user.license.type === licenseType);
  }
}