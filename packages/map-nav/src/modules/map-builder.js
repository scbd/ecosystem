import { color, Label }        from '@amcharts/amcharts4/core'
import { politicalMap, findByParent, hasMap } from '@modules/political-mapping'
import axios from 'axios'
import { mapDataConfigZoomLevel, zoomLevelData, finnished } from '@modules/country-series-config'

export class MapBuilder{
  constructor(map, options){
    this.map            = map
    this.options        = options
    this.map.MapBuilder = this
    this.map.maxZoomLevel = 256

    this.mapSeries.dataFields.zoomLevel = 'zoomLevel'
    this.mapSeries.data=zoomLevelData


    this.events.on('ready', this.ready())

    this.addCountryEvent('hit', countryClick(this.options))
    this.addCountryEvent('over', this.hoverCountry.bind(this))
    this.addCountryEvent('out', this.outCountry.bind(this))
  }

  addCountryLabels(p){
    const alts = ['CK', 'CV', 'CL', 'DK', 'PS', 'ES', 'FJ', 'FM', 'EC', 'GB', 'GD', 'GQ', 'GR', 'ID', 'JP', 'KI', 'KM', 'KN']
    const altLat = new Map([['CK',-.1], ['CM', -2], ['CR', .4], ['ER', -.4], ['FI',-2], ['FM', .5], ['GB', 4], ['GD', .5], ['GM', .2], ['GN', 1], ['HR', 1],['ID', -4], ['IL', -.3], ['IT', 1], ['JP', 3], ['KI', .2], ['KM', .5], ['KN', .3], ['LA', 5]])
    const altLng = new Map([['CL',-8], ['PS', -.75], ['ES', -3], ['GQ', -1],['GR', 1], ['IL', -.3], ['HT', .8],['JO', 1], ['IN', -3]])

    console.log('labelSeries',ls)
    
 
      const latitude = p.visualLatitude
      const longitude = p.visualLongitude
      const text = p.dataItem.dataContext.name
      const code = p.dataItem.dataContext.id
      const isAltLabel = alts.includes(code)
      const isAltLat = altLat.has(code)
      const isAltLng = altLng.has(code)
      const ls = isAltLabel ? this.labelSeriesAlt : this.labelSeries
      
      let label = ls.mapImages.create()
  
      if(code === 'CK') label.fill = color('#000000')

      label.latitude = isAltLat ? latitude + altLat.get(code):latitude
      label.longitude = isAltLng? longitude + altLng.get(code) : longitude
      label.text = text
      label.children.getIndex(0).text = text
      label.appear()
      ls.toFront()


  }
  hoverCountry(ev){
    const code = ev.target.dataItem.dataContext.id

    this.setCountryState(code, 'hover')
  }

  outCountry(ev){
    const code = ev.target.dataItem.dataContext.id

    this.setCountryState(code, 'default')
  }

  setCountryState(code, state){
    const targetCountries = this.getPoliticalRelations(code)

    for (const c of targetCountries) 
      c.setState(state)
  }

  getPoliticalRelations(code){
    const parent = hasMap(code)? hasMap(code) : code
    const target = findByParent(parent).concat([parent])

    return target.map( id => this.getCountry(id))
  }
  
  getCountry(id){ return this.mapSeries.getPolygonById(id) }

  get labelSeries (){
    return this.getSeriesById('labelSeries')
  }

  get labelSeriesAlt (){
    return this.getSeriesById('labelSeriesAlt')
  }

  get flagSeries (){
    return this.getSeriesById('flagSeries')
  }
getSeriesById(id){
  let series

  this.map.series.each((s) => {
    if(s.id !== id) return
    series = s
  })

  return series
}
  get mapSeries (){
    let series

    this.map.series.each((s) => {
      if(!s.mapPolygons || !s.mapPolygons.template) return
      series = s
    })

    return series
  }

  get template (){
    let template

    this.map.series.each((s) => {
      if(!s.mapPolygons || !s.mapPolygons.template) return
      template = s.mapPolygons.template
    })

    return template
  }

  get events (){
    return this.map.events
  }

  addCountryEvent(type, fn){
    const { events } = this.template

    events.on(type, fn)
  }

  test(){
    return axios.get('https://api.cbd.int/api/v2015/countries/').then( d => d.data)
  }

  ready(){
    const self = this
    
    return async() => {
      const { test, map, mapSeries, animation, setAnimationDelay, stopStartDelayAnimation, setCountryHome } = self

      const   code     = self.getCountryFromQuery()
      const { events } = map.seriesContainer

      

      const cc = (await test()).filter(c => !finnished.includes(c.code))

      for (const c of cc) {
        console.log(c.code)
        self.setCountryHome(c.code)
        await sleep(3000)
      }
      if(code) return self.setCountryHome(code)

      self.animation = map.animate({ property: 'deltaLongitude', to: 200000 }, 20000000)
      events.on('down',             () => { animation.pause() })
      events.on('up',               setAnimationDelay.bind(self))
      events.on('swipe',            stopStartDelayAnimation.bind(self))
      events.on('wheel',            stopStartDelayAnimation.bind(self))
      events.on('zoomlevelchanged', stopStartDelayAnimation.bind(self))
    }
  }

  getCountryFromQuery(){
    const { search } = this.options
    const urlParams = new URLSearchParams(location.search)
  
    return urlParams.get(search)
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

  setCountryHome(code){
    const { map } = this
    const relatedCountries = this.getPoliticalRelations(code.toUpperCase())
    const hasParent = hasMap(code.toUpperCase())
    const isLast = (index) => relatedCountries.length-1 == index

    console.log('hasRelations',relatedCountries.map(c => c.dataItem.dataContext.id))
    for (const [i,c] of relatedCountries.entries()) {
      c.fill                      = color('#9a5917')
      c.tooltip.getFillFromObject = false
      c.tooltip.background.fill   = color('#01463a')

      if(!isLast(i)) continue

      map.deltaLatitude  = -c.visualLatitude
      map.deltaLongitude = -c.visualLongitude
      map.homeZoomLevel = c.dataItem.zoomLevel || 2
    
      map.homeGeoPoint = {
        latitude : c.visualLatitude,
        longitude: c.visualLongitude
      }
      this.addCountryLabels(c)
    }
    
    map.goHome()
  }
}


export const countryClick = (opts) => (ev) => {
  const { host, basePath, search } = opts
  const { id } = ev.target.dataItem.dataContext
  
  const hasParent = hasMap(id)
  const code      = hasParent? hasParent : id

  window.location.href = `${host}${basePath}?${search}=${code}`
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}