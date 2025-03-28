import { Entity, Enum, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { DeploymentType, LicenseStatus, PartnershipType } from "../types/enums";
import { Tenant } from "./tenant.entity";

@Entity()
export class Customer {
       @PrimaryKey()
       id: string = v4();

       @Property()
       name!: string;

       @Enum(() => DeploymentType)
       deploymentType!: DeploymentType;

       @Enum(() => LicenseStatus)
       licenseStatus: LicenseStatus = LicenseStatus.pending;

       @OneToOne(() => Tenant, (tenant) => tenant.customer, { nullable: true, owner: true })
       tenant?: Tenant;

       @Enum(() => PartnershipType)
       partnershipType?: PartnershipType;

       @Property({ nullable: true })
       discountPercentage?: number; // Float in Prisma, number in TypeScript

       @Property({ nullable: true })
       platformCost?: number;

       @Property({ nullable: true })
       flatFee?: number;

       @Property({ nullable: true })
       supportPlanType?: string;

       @Property({ nullable: true })
       supportCostPerMonth?: number;

       @Property()
       totalCostPerMonth?: number = 0;

       @Property()
       createdAt: Date = new Date();
}