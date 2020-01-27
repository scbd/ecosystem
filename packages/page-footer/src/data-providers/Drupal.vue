<template>
  <PageFooter v-bind="headerProps"/>
</template>

<script>
import PageFooter     from '../index.vue'
import DefaultOptions from '../modules/defaultOptions'

export default {
  name      : 'DrupalDataProvider',
  components: { PageFooter },
  methods   : {readMenusFromApi},
  data,
  mounted
}

function data(){
  const options                 = DefaultOptions.get({})
  const siteNavigationElements  = []
  const headerProps             = { siteNavigationElements, options }

  return { headerProps }
}

async function mounted(){
  if(!this.headerProps.options.static)
    setTimeout(() => this.readMenusFromApi(), 1000)
}

async function readMenusFromApi(){
  const    checkIe  = (await import(/* webpackChunkName: "check-ie" */ 'check-ie')).default

  if(checkIe(window.navigator.userAgent))
    await import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch')

  const $http = this.$http? this.$http : (await import(/* webpackChunkName: "ky-universal" */ 'ky-universal')).default

  this.headerProps.siteNavigationElements = await getFooterMenuFromApi($http, this.headerProps.options)
  this.$forceUpdate()

}

function getFooterMenuFromApi($http, { dapi }){
  return $http.get(`${dapi}/menus?q=quick-links,topics,information,aPartOf`).json()
}
</script>