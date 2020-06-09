
module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ 'd3-geo', 'd3-geo-projection', 'tslib' ],
  devServer            : {
    port: 8890
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)
  }
}
