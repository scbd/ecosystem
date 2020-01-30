<template>
  <PageFooter v-bind="headerProps"/>
</template>

<script>
import PageFooter     from '../index.vue'
import DefaultOptions from '../modules/defaultOptions'

export default {
  name      : 'DrupalDataProvider',
  components: { PageFooter },
  methods   : { readMenusFromApi },
  data,
  mounted
}

function data(){
  const options                 = DefaultOptions.get({})
  const siteNavigationElements  = []
  const headerProps             = { siteNavigationElements, options }

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

  this.headerProps.siteNavigationElements = await getFooterMenuFromApi($http, this.headerProps.options)
  this.$forceUpdate()
}

async function loadKy(){
  window.$http = (await import(/* webpackChunkName: "ky-universal" */ 'ky-universal')).default

  return window.$http
}
function getFooterMenuFromApi($http, { dapi }){
  return $http.get(`${dapi}/menus?q=quick-links,topics,information,aPartOf`).then(res => res.json())
}
</script>