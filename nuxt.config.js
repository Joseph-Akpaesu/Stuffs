export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'foodie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}
    ],
    script: [
      { src: 'vendor/jquery/jquery.min.js' },
      {  src: 'vendor/bootstrap/js/bootstrap.bundle.min.js' },
      {  src: 'vendor/jquery.easing/jquery.easing.min.js' },
      {  src: 'vendor/isotope-layout/isotope.pkgd.min.js' },
      {  src: 'vendor/venobox/venobox.min.js' },
      {  src: 'vendor/aos/aos.js' },
      {  src: 'vendor/js/main.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    'assets/css/bootstrap.css',
    'assets/css/all.css',
    'assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/date-fns'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data'}
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    },

    redirect: {
      login: '/login',
      logout: '/',
      // callback: '/login',
      home: '/home'
    }
  },
  axios: {
    baseURL: process.env.NODE_ENV === 'dev'
      ? 'http://localhost:8000/api/'
      : 'https://phreezone.africinnovate.xyz/api/'
  },
  publicRuntimeConfig: {
    imagePath: process.env.NODE_ENV === 'dev'
      ? 'http://localhost:8000'
      : 'https://phreezone.africinnovate.xyz',
  },
  router: {
    // middleware: ['auth']
  },
  build: {
  }
}
