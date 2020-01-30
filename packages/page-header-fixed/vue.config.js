const PurgecssPlugin          = require('purgecss-webpack-plugin')
const glob                    = require('glob-all')
const path                    = require('path')
const PublicPathWebpackPlugin = require('@scbd/webpack-plugin-public-path')

module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'ky', 'ky-universal', '@scbd/default-options', 'change-case', 'check-ie', 'tiny-debounce', 'ky-universal', 'vue-i18n' ],
  lintOnSave           : true,
  devServer            : {
    port   : 8881,
    headers: { 'Access-Control-Allow-Origin': '*' }
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

    config.resolve.alias
      .set('@components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias
      .set('@modules', path.resolve(__dirname, 'src/modules'))
    config.resolve.alias
      .set('@locales', path.resolve(__dirname, 'src/locales'))
    config.resolve.alias
      .set('@src', path.resolve(__dirname, 'src'))
  },
  configureWebpack: config => {
    // Merged into the final Webpack config
    config.output.umdNamedDefine = true
    config.plugins.push(new PublicPathWebpackPlugin())
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    )
  }
}
