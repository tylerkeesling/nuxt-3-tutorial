import { NuxtAuthHandler } from '#auth';
import type { AuthConfig } from '@auth/core/types';
import Auth0Provider from '@auth/core/providers/auth0';

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig();

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    Auth0Provider({
      clientId: runtimeConfig.auth.clientId,
      clientSecret: runtimeConfig.auth.clientSecret,
      issuer: runtimeConfig.auth.issuer,
      audience: runtimeConfig.auth.audience,
      wellKnown: `${runtimeConfig.auth.issuer}/.well-known/openid-configuration`,
      checks: ['code', 'state'],
      // authorization: { params: { scope: 'openid email profile ' } },
    }),
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
