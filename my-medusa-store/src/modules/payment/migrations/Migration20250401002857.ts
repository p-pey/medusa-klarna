import { Migration } from '@mikro-orm/migrations';

export class Migration20250401002857 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "app_payment" ("id" text not null, "trackingCode" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "app_payment_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_app_payment_deleted_at" ON "app_payment" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "app_payment" cascade;`);
  }

}
