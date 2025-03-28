import { defineConfig } from "@mikro-orm/postgresql"; // Use your DB type (e.g., @mikro-orm/sqlite)
import { Customer } from "./src/entities/customer.entity";
import { Tenant } from "./src/entities/tenant.entity";
import { User } from "./src/entities/user.entity";
import { UserLicense } from "./src/services/user-license/user-license";

export default defineConfig({
       entities: [Customer, User, UserLicense, Tenant], // List all your entities
       dbName: process.env.DATABASE_NAME || "medusa_db",
       host: process.env.DATABASE_HOST || "localhost",
       port: parseInt(process.env.DATABASE_PORT!, 10) || 5432,
       user: process.env.DATABASE_USER || "postgres",
       password: process.env.DATABASE_PASSWORD || "password",
       migrations: {
              path: "dist/migrations", // Where compiled migrations will go
              pathTs: "src/migrations", // Where source migrations are
       },
});