<template>
  <div id="app">
    <Map :options="options"/>
  </div>
</template>

<script>
import   Map              from '../src/index.vue'
import { DefaultOptions } from '../src/default-options'

export default {
  name      : 'app',
  components: { Map },
  computed  : { options }
}

function options(){
  return { ...DefaultOptions.get() }
}
</script>

<style>

</style>
