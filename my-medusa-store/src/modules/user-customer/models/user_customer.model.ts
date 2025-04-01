import { model } from "@medusajs/framework/utils";
import { DeploymentType, LicenseStatus, PartnershipType } from "../../../types/enums";

export const user_customer = model.define("user_customer", {
       id: model.id().primaryKey(),
       deploymentType: model.enum(DeploymentType),
       name: model.text(),
       licenseStatus: model.enum(LicenseStatus).default(LicenseStatus.pending),
       // tenant: model.hasOne(() => Tenant, {
       //        mappedBy: "user_customer",
       //        nullable: true,
       // }),
       partnershipType: model.enum(PartnershipType).nullable(),
       discountPercentage: model.number().nullable(),
       platformCost: model.number().nullable(),
       flatFee: model.number().nullable(),
       supportPlanType: model.text().nullable(),
       supportCostPerMonth: model.number().nullable(),
       totalCostPerMonth: model.number().default(0),
       createdAt: model.dateTime(),
});

export type UserCustomerType = typeof user_customer;
