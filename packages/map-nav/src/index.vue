<template>
  <div class="cont" ref='map'></div>
</template>
<script>
import { createFromConfig, useTheme, color }           from '@amcharts/amcharts4/core'
import { MapChart, GraticuleSeries, MapPolygonSeries } from '@amcharts/amcharts4/maps'
import { mapConfig, countryClick }                     from '@modules/config'
import   am4themes_animated                            from '@amcharts/amcharts4/themes/animated'// eslint-disable-line


export default {
  name : 'AmMap',
  props: { options: { type: Object, required: true } },
  mounted,
  data,
  beforeDestroy
}

function data(){
  const map = {}

  return { map }
}

function beforeDestroy(){ dispose(this.map) }

async function mounted (){
  dispose(map)
  useTheme(am4themes_animated) // eslint-disable-line

  const geodata = (await import('@amcharts/amcharts4-geodata/worldHigh')).default
  const map     = createFromConfig({ ...mapConfig, geodata }, this.$refs.map, MapChart)


  createCountries(this.options, map)
  createGrid(map)
  map.padding(20,20,20,20)
  this.map = map
}

function dispose(map){ if(map && map.dispose) map.dispose() }

function createGrid({ series }){
  const graticuleSeries = series.push(new GraticuleSeries())

  graticuleSeries.mapLines.template.line.stroke = color('#b1d3f0');
  graticuleSeries.mapLines.template.line.strokeOpacity = 1;
  graticuleSeries.fitExtent = false;
}

function createCountries(opts, { series }){
  const polygonSeries = new MapPolygonSeries()

  series.push(polygonSeries)
  polygonSeries.useGeodata = true

  createCountryTemplate(opts, polygonSeries.mapPolygons)
  return polygonSeries
}

function createCountryTemplate(opts, { template }){
  template.tooltipText = '{name}'
  template.fill        = color('#01463a')
  template.stroke      = color('#9a5917')
  template.strokeWidth = 0.5
  
  createCountryHoverState(template)
  template.events.on('hit', countryClick(opts))
}

function createCountryHoverState({ states }){
  const hoverState  = states.create('hover')

  hoverState.properties.fill = color('#9a5917')
}
</script>

<style scoped>
  .cont{ width: 100%; height: 100%; }
</style>