require('dotenv').config()

module.exports = {
  router: {
    middleware: 'authenticated'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'SampleChat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#1989f1',
    failedColor: '#db4612'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vuetify: {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    '~plugins/firebase',
    { src: `~plugins/moment`, ssr: false }
  ],
  css: [
    '~/assets/scss/style.scss'
  ],
}
