import { createFromConfig, MapChart } from '@scbd/am4-map-lib'

import * as eu                  from './eu'
import * as controls            from './controls'
import * as countries           from './countries'
import * as config              from './config'
import      getDefaultOptionsFn from './default-options'
import      mixin from './vue-comp-mixin'

export const Mixin = mixin
export const MapBaseConfig     = config
export const MapBaseEU         = eu
export const MapBaseControls   = controls
export const MapBaseCountries  = countries
export const getDefaultOptions = getDefaultOptionsFn

const { initEu             } = eu
const { initControls       } = controls
const { configureMapSeries } = countries


export class MapBuilderBase{
  constructor(element, options){
    this.init(element, options)

    configureMapSeries(this)

    this.mapSeries.toFront()

    this.events.on('ready', () => this.status.ready = true)

    if(options.devMode) this.devMode()
  }
  
  init(element, options){
    this.element          = element
    this.map              = createFromConfig({ ...options.config }, element, MapChart)
    this.options          = options
    this.map.maxZoomLevel = 256
    this.locale           = options.locale

    if(this.locale === 'ar') this.map.rtl = true

    const status = { ready: false }
    const self = this
    const statusHandler = {
      set: (obj, prop, value) => {
        if(prop==='ready' && value)
          self.whenReady()
            
        return true
      }
      
    }

    this.status = new Proxy(status, statusHandler)
  }
  whenReady(){
    if(this.options.initControls)
      initControls(this)
    if(this.options.initEu)
      initEu(this)
  }
  get labelSeries (){ return this.getSeriesById('labelSeries') }

  get labelSeriesAlt (){ return this.getSeriesById('labelSeriesAlt') }

  get euButtonSeries (){ return this.getSeriesById('euButtonSeries') }

  get euSeries (){ return this.getSeriesById('euMapSeries') }

  get events (){ return this.map.events }

  get mapSeries (){ return this.getSeriesById('mapSeries') }
  
  get template (){ return this.getSeriesById('mapSeries').mapPolygons.template }

  addCountryEvent(type, fn){  this.mapSeries.mapPolygons.template.events.on(type, fn) }

  getCountry(id){ return this.mapSeries.getPolygonById(id) }
  
  getSeriesById(id){
    let series

    this.map.series.each((s) => {
      if(s.id !== id) return
      series = s
    })

    return series
  }

  devMode(){
    this.map.seriesContainer.events.on('hit', (ev) => console.log(this.map.svgPointToGeo(ev.svgPoint)))
  }
}