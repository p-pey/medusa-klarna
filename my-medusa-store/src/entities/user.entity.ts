import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { UserLicense } from "../services/user-license/user-license";
import { Tenant } from "./tenant.entity";

@Entity()
export class User {
       @PrimaryKey()
       id: string = v4();

       @ManyToOne(() => Tenant)
       tenant!: Tenant;

       @Property()
       tenantId!: string;

       @ManyToOne(() => UserLicense)
       license!: UserLicense;

       @Property()
       licenseId!: string;

       @Property()
       createdAt: Date = new Date();
}