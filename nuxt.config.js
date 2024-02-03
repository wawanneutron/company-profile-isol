require('dotenv').config()

module.exports = {
  // ssr: true,
  // target: 'server',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },

  loading: {
    color: '#fff',
    height: '2px'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'I-Solution - %s',
    title: 'We Provide Services With Values',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content: 'We Provide Services With Values'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'image',
        property: 'og:image',
        content: '/images/logo/meta-logo-isol.jpg'
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/isol-32x32.png'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/fonts.scss',
    '@/assets/scss/app.scss',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api',
    {
      src: '~/plugins/aos',
      ssr: false
    },
    {
      src: '~/plugins/video-background',
      ssr: false
    },
    {
      src: '~/plugins/back-to-top',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: {
            base: '#09273b',
            lighten4: '#1283DA',
            lighten3: '#2750AE',
            lighten2: '#165a86',
            lighten1: '#1b70a8'
          },
          accent: {
            base: '#B90022',
            darken1: '#174A66',
            lighten5: '#E5F0F7',
            lighten4: '#588096',
            lighten3: '#E94D69',
            lighten2: '#FF95A8',
            lighten1: '#FFE0E6'
          },
          secondary: {
            base: '#5F64C0',
            lighten5: '#588096',
            lighten4: '#787EFF',
            lighten3: '#9BA0FF',
            lighten2: '#CED0FF',
            lighten1: '#F1F2FF'
          },
          info: '#2D7FF9',
          warning: {
            base: '#FF9700',
            lighten5: '#FA622D',
            lighten4: '#F39F4F',
            lighten3: '#FEBA57',
            lighten2: '#FFEACC',
            lighten1: '#FFF5E8'
          },
          error: {
            base: '#EF3030',
            lighten4: '#9A1919',
            lighten3: '#FF6060',
            lighten2: '#FFC3C3',
            lighten1: '#FFEEEE'
          },
          success: {
            base: '#11AF22',
            lighten4: '#B3D35C',
            lighten3: '#20C933',
            lighten2: '#93E088',
            lighten1: '#D1F7C4'
          },
          gray: {
            base: '#E0E0E0',
            lighten5: '#FFFFFF',
            lighten4: '#F7F7F7',
            lighten3: '#E8E8E8',
            lighten2: '#F2F2F2',
            lighten1: '#FAFAFA'
          },
          dark: {
            base: '#333333',
            lighten4: '#757575',
            lighten3: '#EFEFEF',
            lighten2: '#F0F0F0',
            lighten1: '#1F2131'
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    vendor: ['aos']
  }
}
