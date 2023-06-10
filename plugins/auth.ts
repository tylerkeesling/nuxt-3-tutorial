import { createAuth0, authGuard } from '@auth0/auth0-vue';

export default defineNuxtPlugin((nuxtApp) => {
  const { domain, clientId, audience, redirectUri: redirect_uri } = useAppConfig().auth;
  // https://auth0.github.io/auth0-vue/index.html
  const auth0 = createAuth0({
    domain,
    clientId,
    authorizationParams: {
      audience,
      redirect_uri,
    },
  });

  // Only instantiate on client
  if (process.client) {
    // Adding @auth0/auth0-vue as a Nuxt3 plugin
    nuxtApp.vueApp.use(auth0);
  }

  addRouteMiddleware('auth', authGuard);

  // Basically this under the hood
  // addRouteMiddleware('auth', () => {
  //   if (process.client) {
  //     auth0?.checkSession();
  //     if (!auth0?.isAuthenticated.value) {
  //       auth0?.loginWithRedirect({
  //         appState: {
  //           // Target path the app gets routed to after handling the callback from Auth0 (defaults to '/')
  //           target: useRoute().path,
  //         },
  //       });
  //     }
  //   }
  // });
});
