export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chat-web-fe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuex-persist'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/date-fns',
    'vue-toastification/nuxt',
  ],
  axios: {
    proxy: true,
    baseURL: process.env.BASE_API_URL || 'https://chat-room-api.vercel.app/api/v1',
    proxyHeaders: false,
    credentials:true,
  },
  proxy: {
    "/api/v1": { 
      target: 'https://chat-room-api.vercel.app/', 
      headers: { "Content-Type":"application/json","Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Credentials": "true" },
      secure: false, 
      pathRewrite: {'^/api/v1': ''} 
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'axios']
    // biên dịch axios cho phiên bản cũ
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://chat-room-api.vercel.app/api/v1'
  },
  common: {
    'Accept': 'application/json, text/plain, */*'
  },
}
