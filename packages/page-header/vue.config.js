module.exports = {
  lintOnSave           : true,
  transpileDependencies: [ 'ky', 'ky-universal', 'check-ie', '@scbd/load-http', ' @scbd/locale', '@scbd/default-options', 'change-case', 'vue-i18n', '@scbd/self-embedding-component', 'change-case' ],
  devServer            : {
    port            : 8882,
    disableHostCheck: true
  },
  css          : { extract: true },
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
  }
}
