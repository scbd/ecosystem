
const path = require('path')

module.exports = {
  lintOnSave: true,
  devServer : {
    allowedHosts: [ 'localhost.cbd.int' ],
    port : 8883
  },
  pluginOptions: {
    s3Deploy: {
      registry          : undefined,
      awsProfile        : 'default',
      region            : 'us-east-1',
      bucket            : 'scbd-components',
      createBucket      : false,
      staticHosting     : false,
      assetPath         : 'dist',
      assetMatch        : '**',
      deployPath        : '/@ecosystem/sso-vue-plugin-scbd',
      acl               : 'public-read',
      pwa               : false,
      enableCloudfront  : false,
      cloudfrontId      : 'E1HTG3XMM9WZ5L',
      cloudfrontMatchers: '/@ecosystem/sso-vue-plugin-scbd',
      uploadConcurrency : 5,
      pluginVersion     : '3.0.0'
    }
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