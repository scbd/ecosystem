// const PurgecssPlugin          = require('purgecss-webpack-plugin');
// const glob                    = require('glob-all');
// const path                    = require('path')
const PublicPathWebpackPlugin = require('@scbd/webpack-plugin-public-path')

module.exports = {
  lintOnSave: true,
  devServer : {
    port            : 8885,
    disableHostCheck: true,
    sourceMap       : true
  },
  css: { extract: true, sourceMap: true },

  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PublicPathWebpackPlugin()
      // new PurgecssPlugin({
      //   paths: glob.sync([
      //     path.join(__dirname, './src/index.html'),
      //     path.join(__dirname, './**/*.vue'),
      //     path.join(__dirname, './src/**/*.js')
      //   ])
      // })
    ]
  }
}
