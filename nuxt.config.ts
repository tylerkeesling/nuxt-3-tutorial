// https://v3.nuxtjs.org/api/configuration/nuxt.config
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  nitro: {
    rollupConfig: {
      plugins: [
        nodePolyfills({
          include: 'crypto',
        }),
      ],
    },
  },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
})
