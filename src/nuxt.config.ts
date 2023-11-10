import { host, oauth2 } from "./static/apiConfig.mjs"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@materializecss/materialize/dist/css/materialize.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@sidebase/nuxt-session'
  ],
  nitro:{
    routeRules:{
      '/login': {
        redirect: {
          to:`https://discord.com/api/oauth2/authorize?client_id=${oauth2.clientID}&response_type=code&redirect_uri=${encodeURIComponent(host + "/api/oauth/callback")}&scope=identify&prompt=none`,
          statusCode: 308
        }
      }
    }
  },
  plugins: [
    {
      src: '~/plugins/materialize.js',
      mode: 'client'
    }
  ]
})
