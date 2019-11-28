<template functional>
  <div v-show="props.show" class="mobile-nav-wrapper ml-auto mobile-menu">
    <div class="mobile-nav-wrapper ml-auto mobile-menu">
      <div  class="navbar-collapse">

        <component
            v-if="props.opts.mainSNEs"
            :is="injections.components.MainNav"
            :siteNavElms="props.opts.mainSNEs"/>

        <div class="mobile-top-menu">
          <hr>
          <component :is="injections.components.TopMenuDropDown" v-bind="props"/>
          <hr>

          <component :is="injections.components.LoginNav" v-bind="props" />

          <component :is="injections.components.SearchNav" v-bind="props"/>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TopMenuDropDown from '@components/TopMenuDropDown'
import LoginNav        from '@components/LoginNav'
import SearchNav       from '@components/SearchNav'
import MainNav         from './MainNav'

const inject = { components: { default: { TopMenuDropDown, LoginNav, SearchNav, MainNav } } }

export default {
  name : 'MobileNav',
  props: [ 'siteNavElms', 'opts', 'show' ],
  inject
}
</script>