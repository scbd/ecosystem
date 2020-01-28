const PurgecssPlugin          = require('purgecss-webpack-plugin')
const glob                    = require('glob-all')
const path                    = require('path')
const PublicPathWebpackPlugin = require('@scbd/webpack-plugin-public-path')

module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'ky', 'ky-universal', '@scbd/default-options', 'change-case', 'check-ie', 'vue-i18n' ],
  lintOnSave           : true,
  devServer            : {
    port: 8884
  },
  pluginOptions: {
    i18n: {
      locale        : 'en',
      fallbackLocale: 'en',
      localeDir     : 'locales',
      enableInSFC   : true
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
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PublicPathWebpackPlugin(),
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

