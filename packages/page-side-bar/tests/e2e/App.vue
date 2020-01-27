<template>
  <div id="app">

    <PageSideBar menu-identifier="portals"/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
