
module.exports = {
  css      : { extract: false },
  devServer: {
    port: 8894
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}
