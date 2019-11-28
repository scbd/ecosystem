<i18n src="./locales/index.json"></i18n>
<template >
  <header id="pageSubHeader" class="header" role="banner" :aria-label="$t('Page Sub Header')">

    <WPHeader v-bind="$data"/>
    
    <SubHeader v-bind="$data"/>

  </header>
</template>

<script>
import WPHeader       from '@components/StructuredData/WPHeader'
import SubHeader      from '@components/SubHeader'
import defaultOptions from '@modules/defaultOptions'

export default {
  name      : 'PageSubHeader',
  components: { WPHeader, SubHeader },
  props     : { siteNavigationElement: { type: Array, required: true },
    options              : { type: Object, default: () => {} } },
  data
}

function data(){
  const siteNavElms = this.siteNavigationElement
  const opts        = defaultOptions(this.options)

  return { siteNavElms, opts }
}
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
  @import "https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css";

  .slide-fade-enter-active { transition:  all .2s ease; }
  .slide-fade-leave-active { transition: all .3s ease; }
  .slide-fade-enter, .slide-fade-leave-to { transform: translateY(-20px); opacity  : 0; }
</style>