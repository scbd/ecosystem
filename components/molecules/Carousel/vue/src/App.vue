<template>
  <div id="app">
    <Carousel/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'

export default {
  name: 'app',
  components: {
    Carousel
  }
}
</script>

<style>
  #app {
      height:100%;
  }
</style>
