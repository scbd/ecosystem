import { buildWidget, dependencyRef } from '@scbd/self-embedding-component'

const name      = '@scbd/map-nav'
const version   = '0.0.45'
const options   = buildOptions()
const propsData = { options }

const { VUE } = dependencyRef
const dependencies      = { all: [ VUE ],
                            css: [ 'https://cdn.cbd.int/@scbd/www-css' ] }

const config            = { version, name, propsData, dependencies }

buildWidget(config)

function buildOptions(){
  const { $isServer, $route } = this || {}
  const { params }            = $route || {}
  const countryToolTipAction  = $isServer? '' : (code) => ` href="#" onclick="window.countryToolTipAction(event, '${code}')" `
  const euActionToolTipAction = $isServer? '' : (code) => ` href="#" onclick="window.euActionToolTipAction(event, '${code}')" `
  const euIdentifier          = 'eu'
  const initEu                = false // false means manually init eu with custom functionality

  if(!$isServer) registerWindowFunctions()

  return {
    params,
    countryParamName: 'country',
    callBack,
    countryToolTipAction,
    euActionToolTipAction,
    euIdentifier,
    initEu
  }
}

function callBack(code){
  //this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('======== main callback '+code)
}

function registerWindowFunctions(){
  window.euActionToolTipAction = euActionToolTipActionListener
  window.countryToolTipAction  = countryToolTipActionListener
}

function countryToolTipActionListener(event, code){
  event.preventDefault()
  //this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('========Window.countryToolTipAction called '+code, event)
}

function euActionToolTipActionListener(event, code){
  event.preventDefault()
  // this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('========Window.euActionToolTipAction called: '+code, event)
}