
module.exports = {
  css                  : { extract: false },
  transpileDependencies: ['vue-style-loader', '@scbd/self-embedding-component','change-case' ],
  devServer            : {
    port   : 8895,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave      : true,
  chainWebpack: config => {
    config.resolve.symlinks(true)

  }
}
