const { resolve } = require('path')

const defaultOptions = {}

module.exports = function (moduleOptions){
  const options  = Object.assign(defaultOptions, normalizeOptions(this, moduleOptions))
  const src      = resolve(__dirname, 'plugin.template.js')
  const fileName = 'ssoScbd.js'
  const mode     = 'client'

  this.addPlugin({ src, fileName, options, mode })

  this.addTemplate({
    src     : resolve(__dirname, './middleware.js'),
    fileName: 'auth.js'
  })

  this.options.router.middleware.push('auth')
}

function normalizeOptions ({ options }, moduleOptions){
  return options.$ssoScbd || moduleOptions || {}
}
