// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'node:path';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@hebilicious/authjs-nuxt'],
  telemetry: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Auth0',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
  alias: {
    cookie: resolve(__dirname, 'node_modules/cookie'),
    jose: resolve(__dirname, 'node_modules/jose/dist/browser/index.js'),
    '@panva/hkdf': resolve(__dirname, 'node_modules/@panva/hkdf/dist/web/index.js'),
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.AUTHJS_SECRET,
    },
    auth: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      issuer: process.env.AUTH0_ISSUER,
    },
  },
  appConfig: {
    auth: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUTH0_AUDIENCE,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
    },
  },
});
