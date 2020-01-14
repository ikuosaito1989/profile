require('dotenv').config()
const { TITLE, DESCRIPTION, SITE_URL, META_IMAGE } = process.env

export default {
  mode: 'universal',
  env: {
    TITLE,
    DESCRIPTION,
    META_IMAGE,
    SITE_URL
  },
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.TITLE,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION
      },
      {
        property: 'og:title',
        content: process.env.TITLE
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: process.env.SITE_URL
      },
      {
        property: 'og:image',
        content: process.env.META_IMAGE
      },
      {
        property: 'og:site_name',
        content: process.env.TITLE
      },
      {
        property: 'og:description',
        content: process.env.DESCRIPTION
      },
      {
        name: 'twitter:title',
        content: process.env.TITLE
      },
      {
        name: 'twitter:image',
        content: process.env.META_IMAGE
      },
      {
        name: 'twitter:url',
        content: process.env.SITE_URL
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: process.env.DESCRIPTION
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/freelancer.css', '~/assets/css/profile.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vee-validate.js', '~/plugins/axios.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-67242212-5'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://isaito-mock.herokuapp.com'
  },
  /*
   ** Build configuration
   */
  build: {
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Configure the generation of your universal web application to a static web application.
   */
  generate: {
    fallback: true
  }
}
