
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ '@scbd/self-embedding-component', '@scbd/sso-vue-plugin-scbd', '@scbd/cached-apis', '@scbd/locale', '@scbd/default-options', '@scbd/load-http', 'vue-multiselect', 'ky', 'ky-universal', 'check-ie', 'change-case', 'localforage' ],
  devServer            : {
    port   : 8891,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
  },
  pluginOptions: {
    i18n: {
      locale        : 'en',
      fallbackLocale: 'en',
      localeDir     : 'locales',
      enableInSFC   : true
    }
  }
}
