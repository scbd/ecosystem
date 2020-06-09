
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ '@scbd/locale', '@scbd/am4-map-lib', '@scbd/default-options' ],
  devServer            : {
    port: 8890
  },
  lintOnSave  : false,
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}
