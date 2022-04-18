import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s│A Better Event Journey 享受一場前所未有的會展體驗',
    title: 'showeasy-v2',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "ShowEasy致力發展一個讓人簡單搜尋、比價、訂購的會展整合平台，讓參展這件事變得不再困難。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "ShowEasy,會展,展覽,會展運輸,展覽品運輸,展覽品出口,世貿展覽館",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'preconnect', href: 'https://fonts.googleapis.com'},
      { rel:'preconnect', href: 'https://fonts.gstatic.com'},
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/all.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  "@nuxtjs/axios",
  "@nuxtjs/i18n",
  "@nuxtjs/robots",
  "nuxt-route-meta",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  googleFonts:{

  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  i18n: {
    // locales: ["en", "zh-tw"],
    defaultLocale: process.env.VUE_APP_I18N_LOCALE || "zh-tw",
    lazy: true,
    langDir: "~/locales/",
    locales: [
      { code: "en", iso: "en-EN", file: "en.json", text: "EN" },
      { code: "zh-tw", iso: "zh-TW", file: "zh-tw.json", text: "繁(TWN)" },
    ],
  },
  robots: {
    UserAgent: "*",
    Allow: "*",
  },
  publicRuntimeConfig: {
  },
  privateRuntimeConfig: {},
}
