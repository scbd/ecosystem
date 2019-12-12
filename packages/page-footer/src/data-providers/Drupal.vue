<template>
  <PageFooter v-bind="headerProps"/>
</template>

<script>
import axios          from 'axios'
import PageFooter     from '@src/index.vue'
import defaultOptions from '@modules/defaultOptions'

export default {
  name      : 'app',
  components: { PageFooter },
  data,
  mounted
}

function data(){
  const options                 = defaultOptions({})
  const siteNavigationElements  = []
  const headerProps             = { siteNavigationElements, options }

  return { headerProps }
}
async function mounted(){
  this.headerProps.siteNavigationElements =  await getMain(this.headerProps.options)
  this.$forceUpdate()
}

function getMain({ dapi }){
  return axios.get(`${dapi}/menus?q=quick-links,topics,information,aPartOf`)
    .then((d) => d.data)
}
</script>