import { model } from "@medusajs/framework/utils";
import { IntegrationLevel, QueuePriority, UserLicenseType as UserLicenseTypeEnum } from "../../../types/enums";

export const License = model.define("license", {
       id: model.id().primaryKey(),
       type: model.enum(UserLicenseTypeEnum),
       pricePerMonth: model.number(),
       organizations: model.text(), // "unlimited" or a number as string
       assessments: model.text(), // "unlimited" or a number as string
       assets: model.number(),
       scopesAccess: model.boolean(),
       integrations: model.enum(IntegrationLevel),
       scanUploadLimit: model.text(), // "unlimited" or number in MB as string
       maxScansStored: model.number(),
       queuePriority: model.enum(QueuePriority),
       guestAccounts: model.number(),

});

export type UserLicenseType = typeof License;