import { Collection, Entity, Enum, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { User } from "../../entities/user.entity";
import { IntegrationLevel, QueuePriority, UserLicenseType } from "../../types/enums";

@Entity()
export class UserLicense {
       @PrimaryKey()
       id: string = v4();

       @Enum(() => UserLicenseType)
       type!: UserLicenseType;

       @Property()
       pricePerMonth!: number;

       @Property()
       organizations!: string; // "unlimited" or a number as string

       @Property()
       assessments!: string; // "unlimited" or a number as string

       @Property()
       assets!: number;

       @Property()
       scopesAccess!: boolean;

       @Enum(() => IntegrationLevel)
       integrations!: IntegrationLevel;

       @Property()
       scanUploadLimit!: string; // "unlimited" or number in MB as string

       @Property()
       maxScansStored!: number;

       @Enum(() => QueuePriority)
       queuePriority!: QueuePriority;

       @Property()
       guestAccounts!: number;

       @OneToMany(() => User, (user) => user.license)
       users = new Collection<User>(this);
}