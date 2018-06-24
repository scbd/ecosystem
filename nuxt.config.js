// const nodeExternals = require('webpack-node-externals')
// const path = require('path')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtjs-design-system',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Design system built with nuxtjs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: 'normalize.css', lang: 'css' },
    { src: '@/assets/app/main.css', lang: 'css' }
  ],

  plugins: [
    { src: '~modules/plugins/particles', ssr: false },
        '~/modules/plugins/i18n.js'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // ============================================================
  //
  // ============================================================
  manifest: {
    name: 'Design System',
    short_name: 'Design System',
    description: 'Design System',
    theme_color: '#00405c',
    display: 'standalone',
    background_color: "#ffffff"
  },

  // ============================================================
  //
  // ============================================================
  router: {
    middleware: ['i18n'],
    extendRoutes (routes) {
      // Generate our non language routes
      const newRoutes = makeRoutes(routes)
      // Add our routes **in front** of the existing routes
      routes.unshift(...newRoutes)
    },
    linkActiveClass: 'is-active'
  },

  // ============================================================
  //
  // ============================================================
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/component-cache', { maxAge: 24 * 1000 * 60 * 60 * 4 }], // cache rendered componenents server side for 1 hour
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/api': {
      target: 'https://api.cbddev.xyz',
      ws: true,
      changeOrigin: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS:true,
    // loaders: [
    //   {
    //     test: /\.md$/,
    //     loaders: ['html-loader', 'markdownit-loader']
    //   }
    // ],
    babel: {
      babelrc: true,
      presets({isServer}) {
          return [
              [
                  'vue-app',
                  {
                      useBuiltIns: true,
                      targets: isServer ? { node: 'current' } : {ie: 10, uglify: true}
                  }]
          ];
      },
      plugins: ["transform-runtime"]
    },

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, client, server }) {


        const babelLoader = config.module.rules.find(rule => rule.loader === 'babel-loader')
        const babelLoaderEs6 = Object.assign({}, babelLoader, { exclude: undefined, test: /vue-authentication/ })
        config.module.rules.push(babelLoaderEs6)

      if (isDev && client) {

        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   include: /(node_modules(?![\\/]@scbd[\\/]))/
        // })

      }
    }
  }
}

// ============================================================
//
// ============================================================
function makeRoutes (routesIn) {
  const routes = []
  routesIn.forEach(r => {
    let path = r.path
    let name = r.name
    let children = r.children
    const component = r.component // re-use the same component/page
    // Remove the /:lang prefix from the path
    path = path.replace('/:lang', '')
    // Adjust the route's name
    if (name === 'lang') {
      // Special case for /:lang index.vue page
      name = 'index' // or you could make this an empty string name ""
      // This becomes the new root index file
      path = '/'
    } else if (name) {
      name = name.replace(/^lang-/, '')
    }
    // If the route has child routes, process them recursively
    if (children) {
      children = makeRoutes(children)
    }
    // Create the new route entry
    const route = {
      path: path,
      name: name,
      component: component
    }
    // Add the child routes if needed
    if (children) {
      route.children = children
    }
    // Add the route to our routes array
    routes.push(route)
  })
  // Return the new routes
  return routes
}
