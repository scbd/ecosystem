<template functional>
  <ul class="navbar-nav ml-auto main-nav">
    <li v-for="(aMenu,index) in props.menuItems" :key="index" class="nav-item  main-menu-item">
      <a  :href="aMenu.url" :id="$options.makeSelector(aMenu, 'SNE')" :title="aMenu.name" class="nav-link" role="button" >
        {{aMenu.name}}
      </a>
    </li>
  </ul>
</template>

<script>
import makeSelector from '@modules/makeSelector'

export default { props: [ 'menuItems' ], makeSelector }
</script>

<style scoped>
  @media screen and (max-width: 768px) { .sub-nav .main-nav{ min-height: unset;} }
</style>