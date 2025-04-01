import { Migration } from '@mikro-orm/migrations';

export class Migration20250331215453 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "license" ("id" text not null, "type" text check ("type" in ('PenetrationTesterBasic', 'PenetrationTesterPlus', 'VulnerabilityManager')) not null, "pricePerMonth" integer not null, "organizations" text not null, "assessments" text not null, "assets" integer not null, "scopesAccess" boolean not null, "integrations" text check ("integrations" in ('none', 'limited', 'dataInput', 'full')) not null, "scanUploadLimit" text not null, "maxScansStored" integer not null, "queuePriority" text check ("queuePriority" in ('low', 'high')) not null, "guestAccounts" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "license_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_license_deleted_at" ON "license" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "license" cascade;`);
  }

}
