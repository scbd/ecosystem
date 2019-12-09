<template>
  <div id="app">
    <Map :options="options"/>
  </div>
</template>

<script>
import   Map              from '@src/index.vue'
import { DefaultOptions } from '@modules/default-options'

export default {
  name      : 'app',
  components: { Map },
  computed  : { options }
}

function options(){
  return DefaultOptions.get()
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
  width: 90%;
  height: 90vh;
}
</style>
