<template>
  <div id="app">
    <h1>speed:</h1>
    <h6 id="speed">{{speed}}</h6>
  </div>
</template>

<script>
import getSpeed from '../src/index'

export default {
  name: 'app',
  data(){
    return { speed: 0 }
  },
  async mounted(){
    this.speed = await getSpeed()

    console.log(this.speed)
  }
}
</script>

