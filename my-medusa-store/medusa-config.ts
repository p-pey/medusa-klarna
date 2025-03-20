import { defineConfig, loadEnv } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({

  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            // if module provider is in a plugin, use `plugin-name/providers/my-payment`
            resolve: "./src/modules/klarna",
            id: "klarna",
            options: {
              // provider options...
              apiKey: "...",
              backend_url: process.env.KLARNA_BACKEND_URL,
              url: process.env.KLARNA_URL,
              user: process.env.KLARNA_USER,
              password: process.env.KLARNA_PASSWORD,
              language: "en",
              merchant_urls: {
                terms: process.env.KLARNA_TERMS_URL,
                checkout: process.env.KLARNA_CHECKOUT_URL,
                confirmation: process.env.KLARNA_CONFIRMATION_URL,
              },
            }
          }
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
  }
})

