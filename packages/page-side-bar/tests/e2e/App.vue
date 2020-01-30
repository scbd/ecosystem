<template>
  <div id="app">

    <PageSideBar menu-identifier="portals" :options="{isNuxt: false}"/>
  </div>
</template>

<script>
import PageSideBar from '../../src/index'

export default {
  name: 'app',
  components: {
    PageSideBar
  }
}
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://cdn.cbd.int/@scbd/www-css@0.0.18/dist/style.min.css";
</style>
