const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob           = require('glob-all');
const path           = require('path')

module.exports = {
  css                  : { extract: false },
  transpileDependencies: [ '@scbd/am4-map-base' ],
  devServer            : {
    port   : 8885,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  lintOnSave  : true,
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.resolve.alias
      .set('@components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias
      .set('@modules', path.resolve(__dirname, 'src/modules'))
    config.resolve.alias
      .set('@src', path.resolve(__dirname, 'src'))
    config.resolve.alias
      .set('@dist', path.resolve(__dirname, 'dist'))
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
