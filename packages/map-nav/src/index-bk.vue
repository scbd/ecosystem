<template>
  <div :style="{ height:`${options.height}px`, width:`${options.width}px` }" style="position:relative;">
    <div class="cont" ref='map'></div>
  </div>
</template>
<script>
import { createFromConfig, useTheme, color }           from '@amcharts/amcharts4/core'
import { MapChart, GraticuleSeries, MapPolygonSeries } from '@amcharts/amcharts4/maps'
import   am4themes_animated                            from '@amcharts/amcharts4/themes/animated'// eslint-disable-line
import geodata   from '@amcharts/amcharts4-geodata/worldHigh'
// import { build } from '@modules/map-builder'

export default {
  name : 'AmMap',
  props: { options: { type: Object, required: true } },
  mounted,
  data,
  beforeDestroy,
  errorCaptured
}

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}

function data(){
  const map = {}

  console.log(geodata)
  return { map }
}

function beforeDestroy(){ dispose(this.map) }

function mounted (){
  setTimeout(() => this.map = build(this.$refs.map, geodata, this.options), 50)
}
function build (el, geoData, options){
  useTheme(am4themes_animated) // eslint-disable-line

  const { main }        = options.config

  console.log('options', { ...main, geoData })
  const map             = createFromConfig({ ...main, geoData }, el, MapChart)
  //const countrySeries   = buildCountrySeries(options)
  //const gridSeries      = buildGridSeries(options)
  // const { series }      = map
  // const { template }    = countrySeries.mapPolygons
  

  // console.log(countrySeries.mapPolygons)
  //buildCountryTemplate(options, countrySeries.mapPolygons)
  const pgSeries = new MapPolygonSeries()

  pgSeries.useGeodata            = true
  pgSeries.calculateVisualCenter = true
  pgSeries.mapPolygons.template.tooltipText = '{name}'
  pgSeries.mapPolygons.template.fill        = color('#01463a')
  pgSeries.mapPolygons.template.stroke      = color('#9a5917')
  pgSeries.mapPolygons.template.strokeWidth = 0.5

  map.series.push(pgSeries)
  pgSeries.toFront()
  map.padding(20, 20, 20, 20)

  map.panBehavior           = 'rotateLongLat'
  map.calculateVisualCenter = true

  return map
}

function dispose(map){ if(map && map.dispose) map.dispose() }

</script>

<style scoped>
  .cont{ width: 100%; height: 450px; }
</style>