import { createAuth0 } from '@auth0/auth0-vue';

export default defineNuxtPlugin((nuxtApp) => {
  const { domain, clientId, audience, redirectUri: redirect_uri } = useAppConfig().auth;

  nuxtApp.vueApp.use(
    createAuth0({
      domain,
      clientId,
      authorizationParams: {
        audience,
        redirect_uri,
      },
    })
  );
});
