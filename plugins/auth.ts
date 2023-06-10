import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createAuth0({
      domain: useAppConfig().auth.domain,
      clientId: useAppConfig().auth.clientId,
      authorizationParams: {
        redirect_uri: useAppConfig().auth.redirectUri,
      },
    })
  )
})
