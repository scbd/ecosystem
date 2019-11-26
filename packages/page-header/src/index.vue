<i18n src="./locales/index.json"></i18n>
<template >
  <header id="pageHeader" class="header" role="banner" :aria-label="$t('Page Header')">

    <WPHeader v-bind="$props"/>
    
    <Icons />

    <Desktop  v-if="!isMobile()" v-bind="$props"/>

    <Mobile  v-if="isMobile()" v-bind="$props"/>

  </header>
</template>

<script>
import WPHeader     from '@components/StructuredData/WPHeader'
import Icons        from '@components/Icons'
import Mobile       from '@components/Mobile'
import Desktop      from '@components/Desktop'

export default {
  name      : 'PageHeader',
  components: { WPHeader, Icons, Mobile, Desktop },
  props     : [ 'siteNavigationElements', 'basePath' ],
  methods   : { isMobile }
}

function isMobile(){
  if(!window) return false
  return window.matchMedia('(max-width: 768px)').matches
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