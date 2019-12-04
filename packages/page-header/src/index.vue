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

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";

  .slide-fade-enter-active { transition:  all .2s ease; }
  .slide-fade-leave-active { transition: all .3s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>