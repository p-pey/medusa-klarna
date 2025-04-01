import { Migration } from '@mikro-orm/migrations';

export class Migration20250331223624 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "user_customer" ("id" text not null, "deploymentType" text check ("deploymentType" in ('RefractedSaaS', 'RefractedDedicated', 'OnPremise')) not null, "name" text not null, "licenseStatus" text check ("licenseStatus" in ('active', 'pending', 'expired')) not null default 'pending', "partnershipType" text check ("partnershipType" in ('Integrator', 'Reseller')) null, "discountPercentage" integer null, "platformCost" integer null, "flatFee" integer null, "supportPlanType" text null, "supportCostPerMonth" integer null, "totalCostPerMonth" integer not null default 0, "createdAt" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "user_customer_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_user_customer_deleted_at" ON "user_customer" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user_customer" cascade;`);
  }

}
