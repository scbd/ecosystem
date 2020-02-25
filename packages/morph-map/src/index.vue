<template>
  <div  style=" width:80vw; border: red solid 1px;">
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
  const mapElement = this.$refs.map
  const hiddenMapElement = this.$refs.hiddenMap

  this.map = new MapBuilder({ mapElement, hiddenMapElement })
}

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}
</script>

<style scoped>

  #map {
    width: 100%;
    max-width:100vw;
    height: 500px;
  }

  #hidden-map{
    width: 100%;
    max-width:100vw;
    height: 500px;
    visibility:hidden;
    position:absolute;
    top:0px;
  }
</style>