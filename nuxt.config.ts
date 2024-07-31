// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://akbari.foundation/',
    }
  },
  app: {
    head: {
      title: 'title',
      htmlAttrs: {
        lang: 'fa'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        {rel:'icon', type:"image/png", href: "/logo.png"}
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/image"],

  image: {
    domains: [
      's3.akbari.foundation'
    ]
  }
})