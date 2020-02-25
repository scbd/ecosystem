import { MapBuilderBase                       } from '@scbd/am4-map-base'
import { initEu, mapHomePositionToEu          } from '@scbd/am4-map-base/src/eu'
import { initAnimation, setAnimationEventsOnSeriesContainer  } from '@scbd/am4-map-base/src/controls'

import { pushHitEventFn, hasPoliticalMappings, mapHomePositionToCountry, setCountryEvents } from '@scbd/am4-map-base/src/countries'


export class MapBuilder extends MapBuilderBase{
  constructor(element, options){
    options.initEu = false
    options.euIdentifier = 'eur'

    super(element, options)
    pushHitEventFn(callBack)
    setCountryEvents(this)


    this.events.on('ready', ready(this))
    this.map.seriesContainer.events.on('ready', initCountryHomeSetting(this))
  }
}

export const ready = (mapBuilder) => () =>  {
  initEu(mapBuilder, { callBack, countryToolTipAction: countryToolTipAction(mapBuilder), euActionToolTipAction: euActionToolTipAction(mapBuilder) })
  
  if(getCountryFromQuery(mapBuilder.options)) return

  initAnimation(mapBuilder)
  setAnimationEventsOnSeriesContainer(mapBuilder)

  mapBuilder.status.ready = true
}

export const clickUrl = ({ options }, id) => {
  const { basePath, search, devMode } = options
  const host                          = devMode? window.location.origin : options.host
  const hasParent                     = hasPoliticalMappings(id)
  const code                          = hasParent? hasParent : id

  return `${host}${basePath}?${search}=${code}`
}

export const callBack =  (mapBuilder) => (ev) => {
  const { euIdentifier } = mapBuilder.options
  const   code           = ev.target.dataItem.dataContext? ev.target.dataItem.dataContext.id : euIdentifier

  window.location.href = clickUrl(mapBuilder, code)
}

export const getCountryFromQuery = ({ search }) => {
  const urlParams   = new URLSearchParams(location.search)
  const searchValue = urlParams.get(search)

  return searchValue? searchValue.toUpperCase() : ''
}

export const initCountryHomeSetting = (mapBuilder) => () => {
  const code = getCountryFromQuery(mapBuilder.options)
    
  if(!code) return
    
  if([ 'EU', 'EUR' ].includes(code)) return setTimeout(() => mapHomePositionToEu(mapBuilder), 200)

  setTimeout(() => mapHomePositionToCountry(code, mapBuilder), 1000)
}

export const countryToolTipAction  = (mapBuilder) => (code) => `href="${clickUrl(mapBuilder, code)}"`
export const euActionToolTipAction = (mapBuilder) => (code) => `href="${clickUrl(mapBuilder, code)}"`