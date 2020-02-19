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
import   WPHeader         from './components/StructuredData/WPHeader'
import   Icons            from './components/Icons'
import   Mobile           from './components/Mobile'
import   Desktop          from './components/Desktop'
import   debounce         from 'tiny-debounce'
import   defaultOpts      from './modules/defaultOptions'

export default {
  name      : 'PageHeaderFixed',
  components: { WPHeader, Icons, Mobile, Desktop },
  computed  : { opts, siteNavElms },
  methods   : { isMobile },
  props     : { siteNavigationElements: { type: Array, required: true },
                options               : { type: Object, default: () => {} } },
  mounted
}

function siteNavElms(){
  return this.siteNavigationElements.length? this.siteNavigationElements : this.options.siteNavigationElements
}

function opts(){
  return defaultOpts.get(this.options)
}

function isMobile(){
  if(typeof window === 'undefined') return false
  return window.matchMedia('(max-width: 990px)').matches
}
function mounted(){
  const self = this

  this.$nextTick(() => window.addEventListener('resize', () => debounce(self.$forceUpdate(), 500)))
}
</script>

<style>
  .slide-fade-enter-active { transition:  all .1s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>
<style scoped>
#pageHeaderFixed{ position: fixed; width: 100vw; z-index: 3; top:0; }
</style>