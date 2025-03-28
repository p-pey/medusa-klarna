import { Collection, wrap } from "@mikro-orm/core";
import { Tenant } from "../entities/tenant.entity";
import { User } from "../entities/user.entity";

export class TenantUtils {
       static mapTenantToDTO(tenant: Tenant): Record<string, any> {
              const tenantEntity = wrap(tenant).toObject();
              return {
                     id: tenantEntity.id,
                     name: tenantEntity.name,
                     createdAt: tenantEntity.createdAt,
                     customerId: tenantEntity.customerId,
                     userCount: tenant.users.isInitialized() ? tenant.users.count() : 0,

              };
       }

       static findUserByLicenseType(
              users: Collection<User>,
              licenseType: string
       ): User | undefined {
              return users.getItems().find((user) => user.license.type === licenseType);
       }

}