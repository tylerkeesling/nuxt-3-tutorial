// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  app: {
    head: {
      title: 'Nuxt Auth0',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    authConfig: {
      domain: 'tpk-demo-env.cic-demo-platform.auth0app.com',
      clientId: 'qcTlZUQ0enh9UrJmajjc6cW5yQLE4rnU',
    }
  },
})
