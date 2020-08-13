<i18n src="./locales/index.json"></i18n>
<template >
  <header id="pageHeaderFixed" ref="pageHeaderFixed" class="header" role="banner" :aria-label="$t('Page Header')">

    <WPHeader v-bind="{ siteNavElms, opts }"/>
    
    <Icons />

    <Desktop  v-if="!isMobile()" v-bind="{ siteNavElms, opts }"/>

    <Mobile  v-if="isMobile()" v-bind="{ siteNavElms, opts }"/>

  </header>
</template>

<script>
import { get$http }        from '@scbd/load-http'
import debounce            from 'tiny-debounce'
import WPHeader            from './components/StructuredData/WPHeader.vue'
import Icons               from './components/Icons.vue'
import Mobile              from './components/Mobile/index.vue'
import Desktop             from './components/Desktop/index.vue'
import getDefaultOptionsFn from './default-options'

export default {
  name      : 'PageHeaderFixed',
  components: { WPHeader, Icons, Mobile, Desktop },
  computed  : { opts },
  methods   : { isMobile, readMenusFromApi, getTopMenu, getMain },
  props     : { options: { type: Object, default: () => {} } },
  mounted, data, created
}

function created(){
  if(!this.opts.static)
    setTimeout(() => this.readMenusFromApi(), 100)
}

async function readMenusFromApi(){
  this.mainSNEs    = (await this.getMain(this.opts))[0]
  this.siteNavElms = (await this.getTopMenu(this.opts))
}

function data(){ return { siteNavElms: [], mainSNEs: {} } }

function opts(){
  const defaultOpts = getDefaultOptionsFn(this.options)

  defaultOpts.siteNavElms = this.siteNavElms.length? this.siteNavElms : defaultOpts.siteNavElms
  defaultOpts.mainSNEs    = Object.keys(this.mainSNEs).length? this.mainSNEs : defaultOpts.mainSNEs

  return defaultOpts
}

function isMobile(){
  if(typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 990px)').matches
}

function mounted(){
  const self = this

  this.$nextTick(() => window.addEventListener('resize', () => debounce(self.$forceUpdate(), 500)))
}

async function getMain({ dapi }){
  const $http = this.$http? this.$http : await get$http()

  return $http.get(`${dapi}/menus/main?postfix=WPHF`).then(res => res.json())
    .then((d) =>  [ { identifier: [ { name: 'drupalMenuName', value: 'main' } ], name: 'main', position: 3, hasPart: d } ])
}

async function getTopMenu({ dapi }){
  const $http = this.$http? this.$http : await get$http()

  return $http.get(`${dapi}/menus/topmenu?postfix=WPHF`).json()
}

</script>

<style>
  .slide-fade-enter-active { transition:  all .1s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>
<style scoped>
#pageHeaderFixed{ position: fixed; width: 100vw; z-index: 3; top:0; }
</style>