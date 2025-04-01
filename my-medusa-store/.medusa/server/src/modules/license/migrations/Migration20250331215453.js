"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250331215453 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250331215453 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "license" ("id" text not null, "type" text check ("type" in ('PenetrationTesterBasic', 'PenetrationTesterPlus', 'VulnerabilityManager')) not null, "pricePerMonth" integer not null, "organizations" text not null, "assessments" text not null, "assets" integer not null, "scopesAccess" boolean not null, "integrations" text check ("integrations" in ('none', 'limited', 'dataInput', 'full')) not null, "scanUploadLimit" text not null, "maxScansStored" integer not null, "queuePriority" text check ("queuePriority" in ('low', 'high')) not null, "guestAccounts" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "license_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_license_deleted_at" ON "license" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "license" cascade;`);
    }
}
exports.Migration20250331215453 = Migration20250331215453;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMzEyMTU0NTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9saWNlbnNlL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAzMzEyMTU0NTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDB3QkFBMHdCLENBQUMsQ0FBQztRQUN4eEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==