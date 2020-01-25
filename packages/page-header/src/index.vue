<i18n src="./locales/index.json"></i18n>
<template >
  <header id="pageSubHeader" class="header" role="banner" :aria-label="$t('Page Sub Header')">
    <WPHeader  v-bind="{ siteNavElms, opts }"/>
    <SubHeader v-bind="{ siteNavElms, opts }"/>
  </header>
</template>

<script>
import WPHeader       from '@components/StructuredData/WPHeader'
import SubHeader      from '@components/SubHeader'
import defaultOptions from '@modules/defaultOptions'

export default {
  name      : 'PageSubHeader',
  components: { WPHeader, SubHeader },
  computed  : { opts, siteNavElms },
  props     : { siteNavigationElement: { type: Object, required: true },
                options              : { type: Object, default: () => {} } }
}

function opts(){
  return defaultOptions(this.options)
}

function siteNavElms(){
  return this.siteNavigationElement
}
</script>
<style scoped>
#pageSubHeader{
  position: fixed;
  top:46px;
  width: 100vw;
  z-index: 99999;
  background-color: white;
}
</style>