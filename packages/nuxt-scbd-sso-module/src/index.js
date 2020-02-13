const { resolve }    = require('path')
const defaultOptions = require('@scbd/sso-vue-plugin-scbd/src/modules/defaultOptions').default

module.exports = function (moduleOptions){
  const modOpts   = normalizeOptions(this, moduleOptions)
  const forceEnv  = modOpts.env || modOpts.ENV || process.env.NODE_ENV || 'prod'
  const opts      = Object.assign(defaultOptions(forceEnv), modOpts, { middlewareNameSpace: 'auth' })

  opts.middlewareNameSpacePath = `./${opts.middlewareNameSpace}`

  this.addTemplate({
    src     : resolve(__dirname, './auth-middleware.template.js'),
    fileName: 'auth.js',
    options : opts
  })

  this.addPlugin(getPluginObj(opts))

  moveHttpPlugin(this.options.plugins) // ensures our dependency is loaded first

  this.options.router.middleware.push('auth')
}

function moveHttpPlugin(plugins){
  const i = plugins.findIndex((p) => {
    if(!p)return false
    if(p.src && p.src.includes('.nuxt/http.js')) return true
    if(p.src) return false
    if(p.includes('.nuxt/http.js')) return true
    return false
  })

  const http = plugins.splice(i, 1)

  plugins.unshift(http[0])
}

function normalizeOptions ({ options }, moduleOptions){ return options.ssoScbd || moduleOptions || {} }

function getPluginObj(moduleOptions){
  const options  = moduleOptions
  const src      = resolve(__dirname, 'plugin.template.js')
  const fileName = 'ssoScbd.js'

  return  { src, fileName, options }
}