<i18n src="./locales/index.json"></i18n>
<template >
  <header id="pageSubHeader" class="header" role="banner" :aria-label="$t('Page Sub Header')">
    <WPHeader  v-bind="{ siteNavElms, opts }"/>
    <SubHeader v-bind="{ siteNavElms, opts }"/>
  </header>
</template>

<script>
import { get$http }          from '@scbd/load-http'
import   WPHeader            from './components/StructuredData/WPHeader.vue'
import   SubHeader           from './components/SubHeader.vue'
import   getDefaultOptionsFn from './default-options'

export default {
  name      : 'PageSubHeader',
  components: { WPHeader, SubHeader },
  methods   : { readMenusFromApi },
  computed  : { opts, siteNavElms },
  props     : { options: { type: Object, default: () => {} } },
  created, data
}

function created(){
  if(!this.opts.static)
    setTimeout(() => this.readMenusFromApi(), 100)
}

function data(){ return { siteNavigationElement: {} } }

function opts(){ return getDefaultOptionsFn(this.options) }

function siteNavElms(){
  return Object.keys(this.siteNavigationElement||{}).length? this.siteNavigationElement : this.opts.siteNavigationElement
}

async function readMenusFromApi(){
  const $http = this.$http? this.$http : await get$http()

  this.siteNavigationElement = (await getMain($http, this.opts))[0]
}

function getMain($http, { dapi }){
  return $http.get(`${dapi}/menus/main?postfix=WPH`).then(res => res.json())
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}
</script>

<style scoped>
#pageSubHeader{ position: fixed; top:45px; width: 100vw; z-index: 2; background-color: white; }
</style>