module.exports = {
  lintOnSave           : true,
  transpileDependencies: [ '@scbd/default-options', '@scbd/load-http', 'ky', 'ky-universal', 'check-ie', 'change-case' ],
  devServer            : {
    allowedHosts: [ 'localhost.cbd.int', 'localhost.cbddev.xyz' ],
    port        : 8883
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}