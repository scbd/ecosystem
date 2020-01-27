<template>
  <HeaderSCBD v-bind="headerProps"/>
</template>

<script>

import   HeaderSCBD       from '../index.vue'
import { DefaultOptions } from '../modules/defaultOptions'

export default {
  name      : 'app',
  components: { HeaderSCBD },
  methods: {readMenusFromApi},
  data,
  mounted
}

function data(){
  const options                = DefaultOptions.get()
  const siteNavigationElement  = {}
  const headerProps            = { siteNavigationElement, options }

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

  this.headerProps.siteNavigationElement = (await getMain($http, this.headerProps.options))[0]
  this.$forceUpdate()

}

function getMain($http, { dapi }){
  return $http.get(`${dapi}/menus/main?postfix=WPH`).json()
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}

</script>