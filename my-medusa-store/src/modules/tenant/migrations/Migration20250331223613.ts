import { Migration } from '@mikro-orm/migrations';

export class Migration20250331223613 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "tenant" ("id" text not null, "name" text not null, "customerId" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "tenant_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_tenant_deleted_at" ON "tenant" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "tenant" cascade;`);
  }

}
