const { resolve }    = require('path')
const defaultOptions = require('@scbd/sso-vue-plugin-scbd/src/modules/defaultOptions').default

module.exports = function (moduleOptions){
  const modOpts   = normalizeOptions(this, moduleOptions)
  const forceEnv  = modOpts.env || modOpts.ENV || process.env.NODE_ENV || 'prod'
  const opts      = Object.assign(defaultOptions(forceEnv), modOpts)

  this.addPlugin(getPluginObj(opts))
  this.addPlugin(getInterceptorPlugObj())

  moveHttpPlugin(this.options.plugins) // ensures our dependincy is loaded first

  this.addTemplate({
    src     : resolve(__dirname, './middleware.js'),
    fileName: 'auth.js',
    options : opts
  })

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
  const mode     = 'client'

  return  { src, fileName, options, mode }
}

function getInterceptorPlugObj(){
  const options  = defaultOptions
  const src      = resolve(__dirname, 'kronos-api-interceptor.js')
  const fileName = 'kronos-api-interceptor.js'
  const mode     = 'client'

  return  { src, fileName, options, mode }
}