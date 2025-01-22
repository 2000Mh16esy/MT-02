// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/leaflet',
      "usebootstrap", "@nuxt/eslint"
    ],

  devtools: { enabled: false },
  compatibilityDate: "2024-07-03",
  css: [
    "./assets/scss/custom.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
           @import "@/assets/scss/_variables.scss";
           `,
        },
      },
    }
  },
  eslint: {
    config: {
      stylistic: {
        indent: 1,
        semi: true,
      }
    }
  },
  usebootstrap: {
    integration: {
     protocol: {
      reqres: {
       type: 'fetch',
       prefix: 'https://reqres.in/api/',
      },
     },
    },
   },
}
)
