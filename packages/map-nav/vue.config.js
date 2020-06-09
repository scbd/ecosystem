
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'limax', '@scbd/am4-map-base', '@scbd/am4-map-lib', '@scbd/default-options', '@scbd/self-embedding-component' ],
  devServer            : {
    port   : 8885,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave  : false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}
