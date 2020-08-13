module.exports = {
  css                  : { extract: true },
  transpileDependencies: [ 'ky', 'ky-universal', 'check-ie', '@scbd/load-http', ' @scbd/locale', '@scbd/default-options', 'change-case', 'vue-i18n', '@scbd/self-embedding-component', 'change-case'  ],
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
  }
}
