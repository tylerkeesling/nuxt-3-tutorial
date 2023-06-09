import { NuxtAuthHandler } from '#auth'
import Auth0Provider from 'next-auth/providers/auth0'

export default NuxtAuthHandler({
  secret: 'my-super-secret',
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      id: 'auth0',
      clientId: 'qcTlZUQ0enh9UrJmajjc6cW5yQLE4rnU',
      clientSecret: 'G6jp9BFVZ_3hRvuS-heqOPtGwRSQsLsV0DV0QYBQMavymSHORw7Omj9mrIqgoyrZ',
      audience: 'https://nuxt-3-backend',
      issuer: 'https://tpk-demo-env.cic-demo-platform.auth0app.com',
      // authorization: { params: { scope: "openid email profile" } }
    }),
  ],
})
