const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob           = require('glob-all');
const path           = require('path')

module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ '@scbd/am4-map-base' ],
  devServer            : {
    port: 8888
  },
  lintOnSave  : true,
  chainWebpack: config => {
    config.resolve.symlinks(false)
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    ]
  }
}
