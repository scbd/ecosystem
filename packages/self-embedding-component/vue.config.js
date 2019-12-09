const path           = require('path')

module.exports = {
  css      : { extract: false },
  devServer: {
    port: 8887
  },
  lintOnSave  : true,
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
    config.resolve.alias
      .set('@dist', path.resolve(__dirname, 'dist'))
  }
}
