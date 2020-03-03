<template>
  <div  class="row" >
    <div class="col-md-8" >
      <div id="map"  ref='map'></div>
      <div id="hidden-map"  ref='hiddenMap'></div>
    </div>
    <div class="col-md-4">
      <div id="spine-pictoral" ref="spinePictoral"></div>
    </div>
  </div>
</template>

<script>
import { DefaultOptions } from '@scbd/am4-map-base/src/default-options'
import { MapBuilder     } from './morph-map'
import { pictoral       } from './pictoral'

export default {
  name    : 'AmMap',
  props   : { options: { type: Object, required: false } },
  methods : { constructMap },
  computed: { opts },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function data (){ return { map: {} } }
function opts(){ return Object.assign(DefaultOptions.get(), this.options) }
function beforeDestroy(){ dispose(this.map) }
function mounted (){ setTimeout(() => this.constructMap(), 100) }// not sure why but map does not mount without a bit of a time out }
function dispose(map){ if(map && map.dispose) map.dispose() }

function constructMap(){
  const mapElement       = this.$refs.map
  const hiddenMapElement = this.$refs.hiddenMap
  const spinePictoral    = this.$refs.spinePictoral

  this.map      = new MapBuilder({ mapElement, hiddenMapElement })
  this.pictoral = pictoral(spinePictoral)
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

  #spine-pictoral{
    width: 100%;
    height: 100%;
  }
</style>