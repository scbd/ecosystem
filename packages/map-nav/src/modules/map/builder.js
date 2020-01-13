import { configureMapSeries, getCountryFromQuery, setCountryHome, setCountryEvents } from '@modules/map/country-service'
import { configEuButton, euHome } from '@modules/map/eu-service'
import { initControls } from '@modules/map/controls'

export class MapBuilder{
  constructor(map, options){
    this.map              = map
    this.options          = options
    this.map.MapBuilder   = this
    this.map.maxZoomLevel = 256
    this.locale           = options.locale

    if(this.locale === 'ar') this.map.rtl = true

    configureMapSeries(this)
    configEuButton(this)
    setCountryEvents(this)

    initControls(this)

    this.events.on('ready', this.ready())
    this.map.seriesContainer.events.on('ready', this.initCountryHomeSetting())
    this.mapSeries.toFront()

    if(options.devMode) this.devMode()
  }

  get labelSeries (){ return this.getSeriesById('labelSeries') }

  get labelSeriesAlt (){ return this.getSeriesById('labelSeriesAlt') }

  get euSeries (){ return this.getSeriesById('euSeries') }

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

  initCountryHomeSetting(){
    const self = this
    
    return () => {
      const code = getCountryFromQuery(self.options)
      
      if(!code) return
      
      if([ 'EU', 'EUR' ].includes(code)) return setTimeout(() => euHome(self), 200)

      setTimeout(() => setCountryHome(code, self), 1000)
    }
  }
  

  ready(){
    const self = this
    
    return () => {
      const { map, setAnimationDelay, stopStartDelayAnimation } = self
      const { events } = map.seriesContainer

      self.animation = map.animate({ property: 'deltaLongitude', to: 200000 }, 20000000)

      if(getCountryFromQuery(self.options)) return

      events.on('down',             () => { self.animation.pause() })
      events.on('up',               setAnimationDelay.bind(self))
      events.on('swipe',            stopStartDelayAnimation.bind(self))
      events.on('wheel',            stopStartDelayAnimation.bind(self))
      events.on('zoomlevelchanged', stopStartDelayAnimation.bind(self))

      this.mapSeries.toFront()
      this.euSeries.toFront()
    }
  }

  devMode(){
    this.map.seriesContainer.events.on('hit', (ev) => console.log(this.map.svgPointToGeo(ev.svgPoint)))
  }

  stopStartDelayAnimation(){
    this.animation.pause()
    this.setAnimationDelay()
  }

  setAnimationDelay(){
    const { animation, delayed } = this

    if(delayed) clearTimeout(delayed)
  
    this.delayed = setTimeout(() => {
      animation.resume()
      clearTimeout(delayed)
      this.delayed = ''
    }, 3000)
  }
}