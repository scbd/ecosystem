<i18n src="./locales/index.json"></i18n>
<template>
  <footer id="pageFooter" >

    <WPFooter v-bind="{ opts, siteNavElms }"/>

    <FollowUs />

    <div class="container row">

      <Nav v-if="siteNavElms[0] && siteNavElms[0].hasPart" :menu="siteNavElms[0]" :classes="['col-12','col-lg-4']" :flex-col="2"/>
      <Nav v-if="siteNavElms[1] && siteNavElms[1].hasPart" :menu="siteNavElms[1]" :classes="['col-12','col-lg-4']" :flex-col="2"/>
      <Nav v-if="siteNavElms[2] && siteNavElms[2].hasPart" :menu="siteNavElms[2]" :classes="['col-6','col-lg-2']" />
      <Nav v-if="siteNavElms[3] && siteNavElms[3].hasPart" :menu="siteNavElms[3]" :classes="['col-6','col-lg-2']" />

    </div>
  </footer>
</template>

<script>
import Nav            from '@components/Nav'
import FollowUs       from '@components/FollowUs'
import WPFooter       from '@components/StructuredData/WPFooter'
import defaultOptions from '@modules/defaultOptions'

export default {
  name      : 'PageFooter',
  components: { Nav, FollowUs, WPFooter },
  computed  : { opts, siteNavElms },
  props     : { siteNavigationElements: { type: Array, required: true },
    options               : { type: Object, default: () => {} } }

}


function siteNavElms(){
  return this.siteNavigationElements
}

function opts(){
  return defaultOptions(this.options)
}
</script>

<style scoped>
  footer { background-color: #202020; color: #cdcdcd; padding-bottom: 5em; letter-spacing: .025em; font-size: 16px; }
  .fu{ margin-bottom:4em; }
  @media (max-width: 568px){ .fu { margin-bottom:2em; }
}
</style>
<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
  @import "https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css";
</style>
