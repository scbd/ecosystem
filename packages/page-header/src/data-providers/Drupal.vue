<template>
  <HeaderSCBD v-bind="headerProps"/>
</template>

<script>
import axios from 'axios'
import HeaderSCBD             from '@src/index.vue'
import defaultOptions         from '@modules/defaultOptions'

export default {
  name      : 'app',
  components: { HeaderSCBD },
  data,
  mounted
}

function data(){
  const options                = defaultOptions({})
  const siteNavigationElement  = {}
  const headerProps            = { siteNavigationElement, options }

  return { headerProps }
}

async function mounted(){
  this.headerProps.siteNavigationElement =  await getMain(this.headerProps.options)
  this.$forceUpdate()
}

function getMain({ dapi }){
  return axios.get(`${dapi}/menus/main?postfix=WPSH`).then((d) =>  ({ identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 1, hasPart: d.data }))
}

</script>