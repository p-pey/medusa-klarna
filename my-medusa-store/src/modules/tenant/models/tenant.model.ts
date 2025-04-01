import { model } from "@medusajs/framework/utils";

export const tenant = model.define("tenant", {
       id: model.id().primaryKey(),
       // userCustomer: model.belongsTo(() => user_customer, {
       //        mappedBy: "Tenant",
       //        nullable: true,
       // }),
       name: model.text(),
       customerId: model.text().nullable(),

});

export type TenantType = typeof tenant;