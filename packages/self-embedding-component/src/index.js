import  { camelCase, pascalCase } from 'change-case'

const VUE_I18N = { url: 'https://cdn.cbd.int/vue-i18n', name: 'VueI18n' }
const VUE      = { url: 'https://cdn.cbd.int/vue',      name: 'Vue' }

export default class EmbedComponent{
  static build (opts){
    EmbedComponent.opts        = Object.assign(setDefaults(opts), opts)
    EmbedComponent.opts.appId  = `${EmbedComponent.opts.appId}-${EmbedComponent.opts.selfId}`
    EmbedComponent.selfElement = document.getElementById(EmbedComponent.opts.selfId)

    if(!EmbedComponent.selfElement) throw new Error(`Id on script tag not found: id="${EmbedComponent.opts.selfId}"`)

    EmbedComponent.opts.propsData.options = attrsAsOptions()

    EmbedComponent.parentNode     = EmbedComponent.selfElement.parentNode

    if(EmbedComponent.opts.i18n)
      EmbedComponent.opts.vuePlugins.unshift(VUE_I18N)

    EmbedComponent.opts.vuePlugins.unshift(VUE)

    main()
  }
}

function main (){
  const deps = EmbedComponent.opts.vuePlugins
  const cssDeps = EmbedComponent.opts.cssDependencies
  const functions = []

  for (let i = 0; i < deps.length; i++)
    functions[i] = () => { loadScript(deps[i].url, functions[i+1]) }
    
  for (let i = 0; i < cssDeps.length; i++)
    loadLink(cssDeps[i])
        
  functions[0]()
}

function setDefaults ({ name, version, options }){

  const selfId          = name.replace('@scbd/', '')
  const compName        = pascalCase(selfId)
  const url             = `https://cdn.cbd.int/${name}@${version}`
  const propsData       = { options }
  const vuePlugins      = []
  const cssDependencies = []
  const i18n            = true
  const appId           = 'appId'

  return { url, compName, propsData, appId, selfId, i18n, cssDependencies, vuePlugins}
}

function getI18n(){
  if(window['VueI18n'])
    return new window['VueI18n']({ locale: 'en', fallbackLocale: 'en', messages: { en: {} } })
  return undefined
}

function loadApp (){
  const divTag = document.createElement('div')

  divTag.id = EmbedComponent.opts.appId

  insertElement(divTag)

  new window['Vue']({ mounted }).$mount(`#${EmbedComponent.opts.appId}`)
}

function mounted(){
  const i18n                      = getI18n()
  const { compName, propsData }   = EmbedComponent.opts
  const VueClass                  = window['Vue'].extend(window[compName])
  const classInstanceProps        = i18n? { i18n, propsData } : { propsData }
  const vueClassInstance          = new VueClass(classInstanceProps)

  vueClassInstance.$mount()

  this.$el.appendChild(vueClassInstance.$el)
}

function insertElement(el){
  EmbedComponent.parentNode.insertBefore(el, EmbedComponent.selfElement)
}

function loadLink(url){
  const tag = document.createElement('link')

  tag.rel     = 'stylesheet'
  tag.charset = 'utf-8'
  tag.href    = url

  insertElement(tag)
}

function loadScript(url, next = loadSelf){
  const tag = document.createElement('script')

  tag.charset            = 'utf-8'
  tag.src                = url
  tag.onload             = next
  tag.onreadystatechange = next

  insertElement(tag)
}

function loadSelf(){
  const { vuePlugins, url } = EmbedComponent.opts

  if(vuePlugins && vuePlugins.length > 0)
    for (let i = 1; i < vuePlugins.length; i++)
      window.Vue.use(window[vuePlugins[i].name])

  loadScript(url, loadApp)
}

function attrsAsOptions(){
  const   self         = EmbedComponent.selfElement
  const { options }    = EmbedComponent.opts
  const   attrs        = self.attributes
  const   newOptions   = {}

  if (!self.hasAttributes()) return options

  for (const { name, value } of attrs){
    if([ 'id', 'src' ].includes(name)) continue

    newOptions[camelCase(name)]=value
  }
  
  return Object.assign(options, newOptions)
}