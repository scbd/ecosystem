<template>
  <div id="app">
    <Map :options="options"/>
  </div>
</template>

<script>
import   Map              from '../src/index.vue'


export default {
  name      : 'app',
  components: { Map },
  computed  : { options }
}

function options(){
  return {  }
}
</script>

<style>

</style>
