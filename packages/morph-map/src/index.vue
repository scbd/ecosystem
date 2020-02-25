<template>
  <div  style="position:relative; width:100%">
    <div id="map"  ref='map'></div>
    <div id="hidden-map"  ref='hiddenMap'></div>
  </div>
</template>

<script>

import { MapBuilder     } from './builder'
import { options } from './config'

export default {
  name    : 'AmMap',
  props   : { options: { type: Object, required: false} },
  methods : { constructMap },
  computed: { opts },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function data (){ return { map: {} } }
function opts(){ return Object.assign(options, this.options) }
function beforeDestroy(){ dispose(this.map) }
function mounted (){ setTimeout(() => this.constructMap(), 100) }// not sure why but map does not mount without a bit of a time out }
function dispose(map){ if(map && map.dispose) map.dispose() }

function constructMap(){
  
  this.map = new MapBuilder(this.$refs.map, this.$refs.hiddenMap)
}

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}
</script>

<style scoped>
  .cont{ width: 100%; height: 450px; }
  #map {
    width: 100%;
    max-width:100%;
    height: 500px;
  }

  #hidden-map{
    width: 100%;
    max-width:100%;
    height: 500px;
    visibility:hidden;
    position:absolute;
    top:0px;
  }
</style>