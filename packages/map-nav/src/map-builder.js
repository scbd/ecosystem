import { MapBuilderBase, MapBaseEU, MapBaseControls, MapBaseCountries } from '@scbd/am4-map-base'
import { hasPoliticalMappings } from '@scbd/am4-map-lib'

const { initEu, mapHomePositionToEu                        } = MapBaseEU
const { initAnimation, setAnimationEventsOnSeriesContainer } = MapBaseControls
const { pushHitEventFn, mapHomePositionToCountry, setCountryEvents } = MapBaseCountries

import { getCountry } from './countries'

export class MapBuilder extends MapBuilderBase{
  constructor(element, options){
    super(element, options)

    pushHitEventFn(callBack)
    setCountryEvents(this)

    this.events.on('ready', ready(this))
    this.map.seriesContainer.events.on('ready', initCountryHomeSetting(this))
  }
}

export const ready = (mapBuilder) => () =>  {
  initEu(mapBuilder, { callBack, countryToolTipAction: countryToolTipAction(mapBuilder), euActionToolTipAction: euActionToolTipAction(mapBuilder) })
  
  if(getCountryCode(mapBuilder)) return

  setTimeout(() => {
    initAnimation(mapBuilder)
    setAnimationEventsOnSeriesContainer(mapBuilder)
  }, 1000)
  console.log(mapBuilder)
}

export const clickUrl = ({ options }, id) => {
  const { basePath, countryParamName, devMode } = options
  const host                          = devMode? window.location.origin : options.host
  const hasParent                     = hasPoliticalMappings(id)
  const code                          = hasParent? hasParent : id

  return `${host}${basePath}?${countryParamName}=${code}`
}

export const callBack =  (mapBuilder) => (ev) => {
  const { euIdentifier } = mapBuilder.options
  const   code           = ev.target.dataItem.dataContext? ev.target.dataItem.dataContext.id : euIdentifier

  if(mapBuilder.options.callBack)  return mapBuilder.options.callBack(code)
  
  window.location.href = clickUrl(mapBuilder, code)
}

export const getCountryCode = (mapBuilder) => getCountryFromQuery(mapBuilder) || getCountryCodeFromParams(mapBuilder)

export const getCountryFromQuery = (mapBuilder) => {
  const { countryParamName }  = mapBuilder.options
  const urlParams   = new URLSearchParams(location.search)
  const searchValue = urlParams.get(countryParamName)

  return searchValue? searchValue.toUpperCase() : undefined
}

export const getCountryCodeFromParams = (mapBuilder) => {
  const { params, countryParamName }  = mapBuilder.options

  if(!params || !countryParamName) return
  
  const countryString                 = params[countryParamName]
  const { code }                      = getCountry(countryString) || {}

  return code
}

export const initCountryHomeSetting = (mapBuilder) => () => {
  const code = getCountryCode(mapBuilder)
  
  if(!code) return
    
  if([ 'EU', 'EUR' ].includes(code)) return setTimeout(() => mapHomePositionToEu(mapBuilder), 200)

  setTimeout(() => mapHomePositionToCountry(code, mapBuilder), 1000)
}

export const countryToolTipAction  = (mapBuilder) => (code) => mapBuilder.options.countryToolTipAction? mapBuilder.options.countryToolTipAction(code) : `href="${clickUrl(mapBuilder, code)}"`
export const euActionToolTipAction = (mapBuilder) => (code) => mapBuilder.options.euActionToolTipAction? mapBuilder.options.euActionToolTipAction(code) : `href="${clickUrl(mapBuilder, code)}"`