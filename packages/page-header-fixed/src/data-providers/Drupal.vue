<template>
  <HeaderSCBD v-bind="headerProps"/>
</template>

<script>
import axios from 'axios'
import HeaderSCBD             from '@src/index.vue'
import { DefaultOptions }     from '@modules/defaultOptions'

export default {
  name      : 'app',
  components: { HeaderSCBD },
  data,
  mounted
}

function data(){
  const options                = DefaultOptions.get()
  const siteNavigationElements = []
  const headerProps            = { siteNavigationElements, options }

  return { headerProps }
}

async function mounted(){
  this.headerProps.options.mainSNEs = await getMain(this.headerProps.options)
  this.headerProps.siteNavigationElements = await getTopMenu(this.headerProps.options)
  this.$forceUpdate()
}

function getMain({ dapi }){
  return axios.get(`${dapi}/menus/main?postfix=WPH`).then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d.data } ])
}

function getTopMenu({ dapi }){
  return axios.get(`${dapi}/menus/topmenu?postfix=WPH`).then((d) => d.data)
}
</script>