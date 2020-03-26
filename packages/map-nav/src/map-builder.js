import { MapBuilderBase                       } from '@scbd/am4-map-base'
import { initEu, mapHomePositionToEu          } from '@scbd/am4-map-base/src/eu'
import { initAnimation, setAnimationEventsOnSeriesContainer  } from '@scbd/am4-map-base/src/controls'

import { pushHitEventFn, hasPoliticalMappings, mapHomePositionToCountry, setCountryEvents } from '@scbd/am4-map-base/src/countries'
import { getCountry } from './countries'

export class MapBuilder extends MapBuilderBase{
  constructor(element, options){
    options.initEu = false
    options.euIdentifier = 'eur'

    super(element, options)
    pushHitEventFn(callBack)
    setCountryEvents(this)

    this.events.on('ready', ready(this))
    this.map.seriesContainer.events.on('ready', initCountryHomeSetting(this))

    // console.log('getCountryByCode sdhsfjsf', getCountryByCode('hjhjjh'))
  //console.log('getCountryByCode ca', getCountry('sgfs'))

    //console.log('getCountryByName("بوليفيا (دولة - المتعددة القوميات)")', getCountryByName('بوليفيا (دولة - المتعددة القوميات)'))
    // console.log('getCountryByName("玻利维亚（多民族国）")', getCountryByName('玻利维亚（多民族国）'))
   // console.log('getCountryByName("Canada")', getCountryByName('Антигуа и Барбуда'))
  }
}

export const ready = (mapBuilder) => () =>  {
  initEu(mapBuilder, { callBack, countryToolTipAction: countryToolTipAction(mapBuilder), euActionToolTipAction: euActionToolTipAction(mapBuilder) })
  
  if(getCountryCode(mapBuilder)) return

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

  if(mapBuilder.options.callBack)  return mapBuilder.options.callBack(code)
  
  window.location.href = clickUrl(mapBuilder, code)
}

export const getCountryCode = (mapBuilder) => getCountryFromQuery(mapBuilder) || getCountryCodeFromParams(mapBuilder)

export const getCountryFromQuery = (mapBuilder) => {
  const { search }  = mapBuilder.options
  const urlParams   = new URLSearchParams(location.search)
  const searchValue = urlParams.get(search)

  return searchValue? searchValue.toUpperCase() : ''
}

export const getCountryCodeFromParams = (mapBuilder) => {
  const { params, countryParamName }  = mapBuilder.options

  if(!params || !countryParamName) return
  
  const countryString                 = params[countryParamName]
  const { code }                      = getCountry(countryString) || {}

  if(!code) throw new Error(`NavMap.MapBuilder.getCountryFromParams: ${countryString} is not a country`)

  return code
}

export const initCountryHomeSetting = (mapBuilder) => () => {
  const code = getCountryCode(mapBuilder)
  
  console.log('getCountryCode(mapBuilder)', getCountryCode(mapBuilder))
  if(!code) return
    
  if([ 'EU', 'EUR' ].includes(code)) return setTimeout(() => mapHomePositionToEu(mapBuilder), 200)

  setTimeout(() => mapHomePositionToCountry(code, mapBuilder), 1000)
}


export const countryToolTipAction  = (mapBuilder) => (code) => mapBuilder.options.countryToolTipAction || `href="${clickUrl(mapBuilder, code)}"`
export const euActionToolTipAction = (mapBuilder) => (code) => mapBuilder.options.euActionToolTipAction || `href="${clickUrl(mapBuilder, code)}"`