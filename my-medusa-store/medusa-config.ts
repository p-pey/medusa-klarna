import { defineConfig, loadEnv } from '@medusajs/framework/utils'
import { TENANT_MODULE } from './src/services/tenant'
import { USER_LICENSE_MODULE } from './src/services/user-license'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  modules: [
    {
      key: TENANT_MODULE,
      resolve: "./src/modules/tenant",
    },
    {
      key: USER_LICENSE_MODULE,
      resolve: "./src/modules/user-license",
    },
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: './src/providers/mollie',
            id: "mollie",
            options: {
              apiKey: process.env.MOLLIE_API_KEY,
              medusaUrl: process.env.medusaUrl,
              redirectUrl: process.env.MOLLIE_REDIRECT_URL,

            }
          },
        ]
      }
    }

  ],
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },

})

