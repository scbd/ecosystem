module.exports = {
  lintOnSave           : true,
  transpileDependencies: [ 'ky', 'ky-universal', 'check-ie' ],
  devServer            : {
    port: 8895
  },
  chainWebpack: config => {
    config.resolve.symlinks(false)
  }
}