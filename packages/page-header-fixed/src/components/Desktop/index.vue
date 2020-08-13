<i18n src="../../locales/index.json"></i18n>
<template functional>
  <nav id="pagFixedNav" class="navbar navbar-expand-lg top-nav">
    <div class="limited-width-content">

      <div class="navbar-collapse">
        <component :is="injections.components.TopMenuDropDown" v-bind="props"/>
      
        <component :is="injections.components.LoginNav" v-bind="props"/>

        <div id="block-topsearchblock" class="block-top-search-block" >
          <component :is="injections.components.SearchNav" v-bind="props"/>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
import TopMenuDropDown from '../TopMenuDropDown.vue'
import SearchNav       from '../SearchNav.vue'
import LoginNav        from '../LoginNav.vue'

const inject = { components: { default: { TopMenuDropDown, SearchNav, LoginNav } } }

export default {
  props: [ 'siteNavElms', 'opts' ],
  inject
}
</script>