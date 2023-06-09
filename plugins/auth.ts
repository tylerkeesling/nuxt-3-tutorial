import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createAuth0({
      domain: 'tpk-demo-env.cic-demo-platform.auth0app.com',
      clientId: 'qcTlZUQ0enh9UrJmajjc6cW5yQLE4rnU',
      authorizationParams: {
        // redirect_uri: window.location.origin,
        redirect_uri: 'https://feature-auth0-spa-js.nuxt-3-tutorial.pages.dev/',
      },
    })
  )
})
