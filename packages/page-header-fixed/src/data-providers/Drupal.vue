<template>
  <HeaderSCBD v-bind="headerProps"/>
</template>

<script>
import HeaderSCBD  from '../index.vue'
import defaultOpts from '../modules/defaultOptions'

export default {
  name      : 'app',
  components: { HeaderSCBD },
  methods   : { readMenusFromApi },
  data,
  mounted
}

function data(){
  const options                = defaultOpts.get()
  const siteNavigationElements = []
  const headerProps            = { siteNavigationElements, options }

  return { headerProps }
}

function mounted(){
  if(!this.headerProps.options.static)
    setTimeout(() => this.readMenusFromApi(), 1000)
}

async function readMenusFromApi(){
  if(!window.checkIE)
    window.checkIE = (await import(/* webpackChunkName: "check-ie" */ 'check-ie')).default

  if(window.checkIE(window.navigator.userAgent).isIE && !window.polyfillFetch)
    window.polyfillFetch = await import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch')

  const $http = this.$http? this.$http : (window.$http? window.$http : await loadKy())

  this.headerProps.options.mainSNEs = (await getMain($http, this.headerProps.options))[0]
  this.headerProps.siteNavigationElements = await getTopMenu($http, this.headerProps.options)
  this.$forceUpdate()
}

async function loadKy(){
  window.$http = (await import(/* webpackChunkName: "ky-universal" */ 'ky-universal')).default

  return window.$http
}

function getMain($http, { dapi }){
  return $http.get(`${dapi}/menus/main?postfix=WPH`).then(res => res.json())
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}

function getTopMenu($http, { dapi }){
  return $http.get(`${dapi}/menus/topmenu?postfix=WPH`).then(res => res.json())
}
</script>