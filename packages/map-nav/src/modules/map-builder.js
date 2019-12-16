import { color                 } from '@amcharts/amcharts4/core'
import { findByParent, hasMap  } from '@modules/political-mapping'
import { zoomLevelData         } from '@modules/country-series-config'

console.log(zoomLevelData)
export class MapBuilder{
  constructor(map, options){
    this.map             = map
    this.options         = options
    this.map.MapBuilder  = this
    this.map.maxZoomLevel = 256

    this.mapSeries.data= [ ...zoomLevelData ]
    this.mapSeries.dataFields.zoomGeoPoint = 'zoomGeoPoint'
    this.mapSeries.dataFields.zoomLevel = 'zoomLevel'


    this.events.on('ready', this.ready())

    this.addCountryEvent('hit', countryClick(this.options))
    this.addCountryEvent('over', this.hoverCountry.bind(this))
    this.addCountryEvent('out', this.outCountry.bind(this))

    this.map.seriesContainer.events.on('over', (ev) => console.log(this.map.svgPointToGeo(ev.pointer.point)))
  }

  addCountryLabels(p){ // eslint-disable-line
    const alts = [ 'CK', 'CV', 'CL', 'DK', 'PS', 'ES', 'FJ', 'FM', 'EC', 'GB', 'GD', 'GQ', 'GR', 'ID', 'JP', 'KI', 'KM', 'KN', 'LC', 'MH', 'MC', 'MV', 'MZ', 'NO', 'MY', 'NR', 'NZ', 'NU', 'PH', 'PG',  'SC', 'SB', 'ST', 'TT', 'TO', 'VC', 'TV', 'VN', 'VU' ]
    const altLat = new Map([ [ 'CK', -.1 ], [ 'CM', -2 ], [ 'CR', .4 ], [ 'ER', -.4 ], [ 'FI', -2 ], [ 'FM', .5 ], [ 'GB', 4 ], [ 'GD', .5 ], [ 'GM', .2 ], [ 'GN', 1 ], [ 'HR', 1 ], [ 'ID', -4 ], [ 'IL', -.3 ], [ 'IT', 1 ], [ 'JP', 3 ], [ 'KI', .2 ], [ 'KM', .5 ], [ 'KN', .3 ], [ 'LA', 5 ], [ 'LI', .2 ], [ 'LC', .2 ], [ 'MH', .2 ], [ 'MM', 2 ], [ 'MC', -.2 ], [ 'MV', .1 ], [ 'MZ', -1.5 ], [ 'NR', .2 ], [ 'PA', .5 ], [ 'NU', .2 ], [ 'PH', -.2 ], [ 'SC', .1 ], [ 'SM', .1 ], [ 'TL', .2 ], [ 'TH', 2 ], [ 'TT', .4 ], [ 'TO', .1 ], [ 'US', -5 ], [ 'VC', .2 ], [ 'TV', .1 ], [ 'VA', .05 ], [ 'CU', .4 ]      ])
    const altLng = new Map([ [ 'CL', -8 ], [ 'PS', -.75 ], [ 'ES', -3 ], [ 'GQ', -1 ], [ 'GR', 1 ], [ 'IL', -.3 ], [ 'HT', .8 ], [ 'JO', 1 ], [ 'IN', -3 ], [ 'MD', .5 ], [ 'MW', -.5 ], [ 'MZ', 4 ], [ 'NO', -10 ], [ 'NZ', -3.5 ], [ 'OM', 1 ], [ 'PT', -.4 ], [ 'PG', 2 ], [ 'RU', 95 ], [ 'SE', -2.5 ], [ 'SO', .5 ], [ 'US', 20 ], [ 'VN', 4 ], [ 'CA', -12 ] ])
    
 
    const latitude = p.visualLatitude
    const longitude = p.visualLongitude
    const text = p.dataItem.dataContext.name
    const code = p.dataItem.dataContext.id
    const isAltLabel = alts.includes(code)
    const isAltLat = altLat.has(code)
    const isAltLng = altLng.has(code)
    const ls = isAltLabel ? this.labelSeriesAlt : this.labelSeries
      
    const label = ls.mapImages.create()
  
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
    const target = findByParent(parent).concat([ parent ])

    return target.map(id => this.getCountry(id))
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

  ready(){
    const self = this
    
    return () => {
      const { map, animation, setAnimationDelay, stopStartDelayAnimation } = self

      const   code     = self.getCountryFromQuery()
      const { events } = map.seriesContainer
      

      const cc = (await test()).filter(c => !finnished.includes(c.code))

  
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

  setCountryHome(code){ // eslint-disable-line
    const { map } = this
    const relatedCountries = this.getPoliticalRelations(code.toUpperCase())
    const isLast = (index) => relatedCountries.length-1 == index

    for (const [ i, c ] of relatedCountries.entries()){
      c.fill                      = color('#9a5917')
      c.tooltip.getFillFromObject = false
      c.tooltip.background.fill   = color('#01463a')

      if(!isLast(i)) continue
      
      if(![ 'RU' ].includes(code))
        console.log('c.dataItem.zoomLevel', c)
      map.homeZoomLevel = c.dataItem.zoomLevel || 2
    
      if(![ 'RU' ].includes(code)){
        map.deltaLatitude  = -c.visualLatitude
        map.deltaLongitude = -c.visualLongitude

        map.homeGeoPoint = {
          latitude : c.visualLatitude,
          longitude: c.visualLongitude
        }
      }
      else{
        map.deltaLatitude  = -c.dataItem.zoomGeoPoint.latitude
        map.deltaLongitude = -c.dataItem.zoomGeoPoint.longitude
        map.homeGeoPoint = {
          latitude : c.dataItem.zoomGeoPoint.latitude,
          longitude: c.dataItem.zoomGeoPoint.longitude
        }
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