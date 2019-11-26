<template functional>
  <footer id="pageFooter" >
    <component  :is="injections.components.WPFooter"
                v-bind="props"/>
    <component  :is="injections.components.FollowUs"/>
    
    <div class="container row">

      <component  :is="injections.components.Nav"
                  :menu="props.siteNavigationElements[0]"
                  :classes="['col-12','col-lg-4']"
                  :flex-col="2"/>

      <component  :is="injections.components.Nav"
                  :menu="props.siteNavigationElements[1]" :classes="['col-12','col-lg-4']"
                  :flex-col="2"/>

      <component  :is="injections.components.Nav"
                  :menu="props.siteNavigationElements[2]" :classes="['col-6','col-lg-2']"
                  />

      <component  :is="injections.components.Nav"
                  :menu="props.siteNavigationElements[3]" :classes="['col-6','col-lg-2']"/>
    </div>
  </footer>
</template>

<script>
import Nav from '@components/Nav'
import FollowUs from '@components/FollowUs'
import WPFooter from '@components/StructuredData/WPFooter'

const inject = { components: { default: { Nav, FollowUs, WPFooter } } }

export default {
  name : 'PageFooter',
  props: [ 'siteNavigationElements', 'basePath' ],
  inject
}
</script>

<style scoped>
  footer {
    background-color: #202020;
    color: #cdcdcd;

    padding-bottom: 5em;
    letter-spacing: .025em;
    font-size: 16px;
  }
  .fu{
  margin-bottom:4em;
}
@media (max-width: 568px){
  .fu {
    margin-bottom:2em;
  }
}
</style>
<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://prod.drupal.www.infra.cbd.int/themes/custom/bootstrap_sass/css/style.css";
  @import "https://s3.amazonaws.com/phoenix.www.cbd.int/themes/custom/bootstrap_sass/css/style.css";
</style>
