
const path = require('path')

module.exports = {
  lintOnSave           : true,
  transpileDependencies: [ 'ky', 'ky-universal' ],
  devServer            : {
    allowedHosts: [ 'localhost.cbd.int' ],
    port        : 8883
  },
  css: {
    loaderOptions: {
      postcss: {
        path: __dirname
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.resolveLoader.modules.add(
      `${path.dirname(require.resolve('@vue/cli-plugin-babel'))}/node_modules`
    )
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}