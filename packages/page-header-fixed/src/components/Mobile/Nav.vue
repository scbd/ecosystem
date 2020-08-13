<template functional>
  <div v-show="props.show" class="mobile-nav-wrapper ml-auto mobile-menu" style="min-width:88vw;">
      <div  class="navbar-collapse" style="width:100%">
        <component
            :is="injections.components.MainNav"
            :siteNavElms="props.opts.mainSNEs"/>

        <div class="mobile-top-menu">
          <hr >
          <component :is="injections.components.TopMenuDropDown" v-bind="props"/>
          <hr >

          <component :is="injections.components.LoginNav" v-bind="props" />

          <component :is="injections.components.SearchNav" v-bind="props"/>

        </div>
      </div>

  </div>
</template>

<script>
import TopMenuDropDown from '../TopMenuDropDown.vue'
import LoginNav        from '../LoginNav.vue'
import SearchNav       from '../SearchNav.vue'
import MainNav         from './MainNav.vue'

const inject = { components: { default: { TopMenuDropDown, LoginNav, SearchNav, MainNav } } }

export default {
  name : 'MobileNav',
  props: [ 'siteNavElms', 'opts', 'show' ],
  inject
}
</script>