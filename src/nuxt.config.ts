// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@materializecss/materialize/dist/css/materialize.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    {
      src: '~/plugins/materialize.js',
      mode: 'client'
    }
  ]
})
