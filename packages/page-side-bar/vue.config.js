const PurgecssPlugin          = require('purgecss-webpack-plugin');
const glob                    = require('glob-all');
const path                    = require('path')
const PublicPathWebpackPlugin = require('@scbd/webpack-plugin-public-path')

module.exports = {
  transpileDependencies: [ 'ky', 'ky-universal', '@scbd/default-options', 'check-ie' ],
  lintOnSave           : true,
  devServer            : {
    port            : 8885,
    disableHostCheck: true
  },
  css: { extract: false },

  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PublicPathWebpackPlugin(),
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
