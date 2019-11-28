const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path')

module.exports = {
  css          : { extract: true },
  pluginOptions: {
    i18n: {
      locale        : 'en',
      fallbackLocale: 'en',
      localeDir     : 'locales',
      enableInSFC   : true
    },

    s3Deploy: {
      registry          : undefined,
      awsProfile        : 'default',
      region            : 'us-east-1',
      bucket            : 'scbd-components',
      createBucket      : false,
      staticHosting     : false,
      assetPath         : 'dist',
      assetMatch        : '**',
      deployPath        : '/@ecosystem/page-header',
      acl               : 'public-read',
      pwa               : false,
      enableCloudfront  : false,
      cloudfrontId      : 'E1HTG3XMM9WZ5L',
      cloudfrontMatchers: '/@ecosystem/page-header/*',
      uploadConcurrency : 5,
      pluginVersion     : '3.0.0'
    }
    
  },
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()

    config.resolve.alias
      .set('@components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias
      .set('@modules', path.resolve(__dirname, 'src/modules'))
    config.resolve.alias
      .set('@locales', path.resolve(__dirname, 'src/locales'))
    config.resolve.alias
      .set('@src', path.resolve(__dirname, 'src'))
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    ]
  }
}
