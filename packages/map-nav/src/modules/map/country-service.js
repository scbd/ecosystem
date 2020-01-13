import { color                 } from '@amcharts/amcharts4/core'
import { findByParent, hasMap  } from '@modules/map/political-mapping'
import { addCountryLabel       } from '@modules/map/country-label-service'
import { getStyle              } from './config'

const isCustomZoomCenter = (code) => [ 'RU' ].includes(code)

export const hoverCountry = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'hover', mapBuilder)
}

const overEventQueue = [ hoverCountry ]

export const pushOverEventFn = (fn) => overEventQueue.push(fn)

export const setCountryEvents = (mapBuilder) => {
  for (const overEventFunction of overEventQueue)
    mapBuilder.addCountryEvent('over', overEventFunction(mapBuilder))
  
  mapBuilder.addCountryEvent('hit',  onClickCountry(mapBuilder))
  mapBuilder.addCountryEvent('out',  outCountry(mapBuilder))
}

export const onClickCountry = (mapBuilder) => (ev) => {
  const { options } = mapBuilder

  countryClick(options)(ev)
  onClickDevMode(mapBuilder)(ev)
}

export const onClickDevMode = (mapBuilder) => (ev) => {
  if(!mapBuilder.options.devMode) return
  const code  = ev.target.dataItem.dataContext.id
  const geo   = mapBuilder.map.svgPointToGeo(ev.svgPoint)

  console.log({ ...geo, code })
}

export const outCountry = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'default', mapBuilder)
}

export const setCountryState = (code, state, mapBuilder) => {
  const targetCountries = getPoliticalRelations(code.toUpperCase(), mapBuilder)

  for (const c of targetCountries)
    c.setState(state)
}

export const clickUrl = ({ options }, id) => {
  const { basePath, search, devMode } = options
  const host                          = devMode? window.location.origin : options.host
  const hasParent                     = hasMap(id)
  const code                          = hasParent? hasParent : id

  return `${host}${basePath}?${search}=${code}`
}

export const countryClick =  (options) => (ev) => { window.location.href = clickUrl({ options }, ev.target.dataItem.dataContext.id) }

export const getPoliticalRelations = (code, mapBuilder) => {
  const parent = hasMap(code)? hasMap(code) : code
  const target = findByParent(parent).concat([ parent ])

  return target.map(id => mapBuilder.getCountry(id))
}

export const configureMapSeries = (mb) => { mb.mapSeries.data = [ ...zoomLevelData ] }

export const getCountryFromQuery = ({ search }) => {
  const urlParams   = new URLSearchParams(location.search)
  const searchValue = urlParams.get(search)

  return searchValue? searchValue.toUpperCase() : ''
}

export const styleHomePolygon = (country, hideToolTip = true) => {
  country.fill = color(getStyle().hover)
  if(hideToolTip){
    country.showTooltipOn = 'doNotShow'
    country.dispatch('over')
    country.dispatch('out')
  }
}

export const setCountryHome = (id, mapBuilder) => { // eslint-disable-line
  const   code             = id.toUpperCase()
  const { animation, map } = mapBuilder
  const   relatedCountries = getPoliticalRelations(code, mapBuilder)
  const   isLast           = (index) => relatedCountries.length-1 == index

  animation.pause()

  for (const [ i, countryPolygon ] of relatedCountries.entries()){
    const { zoomLevel } = countryPolygon.dataItem

    map.homeZoomLevel = zoomLevel || 2
  
    if(isCustomZoomCenter(code)) setHomeToCountryFromZoomGeoPoint(map, countryPolygon)
    else setHomeToCountryFromVisualCenter(map, countryPolygon)
    
    if(isLast(i))
      addCountryLabel(countryPolygon, mapBuilder)
    styleHomePolygon(countryPolygon)
  }
  
  map.goHome(2500)
}

export const setHomeToCountryFromVisualCenter = (map, countryPolygon) => {
  const lngLat = getVisualCenter(countryPolygon)

  setHomeToCountry(map, lngLat)
}

export const setHomeToCountryFromZoomGeoPoint = (map, countryPolygon) => {
  const { zoomGeoPoint } = countryPolygon.dataItem

  setHomeToCountry(map, zoomGeoPoint)
}

export const setHomeToCountry = (map, lngLat) => {
  setDelta(map, lngLat)
  setHomeGeoPoint(map, lngLat)
}

export const getVisualCenter = (countryPolygon) => ({ latitude: countryPolygon.visualLatitude, longitude: countryPolygon.longitude })

export const setDelta = (map, { latitude, longitude }) => {
  map.deltaLatitude  = -latitude
  map.deltaLongitude = -longitude
}

export const setHomeGeoPoint = (map, { latitude, longitude }) => map.homeGeoPoint = { latitude, longitude }

export const zoomLevelData =  new Set([
  { id: 'AD', zoomLevel: 128 },
  { id: 'AE', zoomLevel: 32 },
  { id: 'AG', zoomLevel: 32 },
  { id: 'AL', zoomLevel: 32 },
  { id: 'AO', zoomLevel: 8 },
  { id: 'AR', zoomLevel: 2 },
  { id: 'AT', zoomLevel: 32 },
  { id: 'AU', zoomLevel: 2 },
  { id: 'BB', zoomLevel: 32 },
  { id: 'AM', zoomLevel: 32 },
  { id: 'BA', zoomLevel: 32 },
  { id: 'BD', zoomLevel: 16 },
  { id: 'BE', zoomLevel: 64 },
  { id: 'BG', zoomLevel: 32 },
  { id: 'BH', zoomLevel: 128 },
  { id: 'AZ', zoomLevel: 32 },
  { id: 'BO', zoomLevel: 8 },
  { id: 'BR', zoomLevel: 2 },
  { id: 'BS', zoomLevel: 16 },
  { id: 'BT', zoomLevel: 32 },
  { id: 'BY', zoomLevel: 16 },
  { id: 'CA', zoomLevel: 2 },
  { id: 'BZ', zoomLevel: 32 },
  { id: 'CD', zoomLevel: 4 },
  { id: 'CG', zoomLevel: 8 },
  { id: 'CH', zoomLevel: 32 },
  { id: 'CI', zoomLevel: 16 },
  { id: 'CK', zoomLevel: 128 },
  { id: 'BW', zoomLevel: 8 },
  { id: 'CM', zoomLevel: 8 },
  { id: 'CO', zoomLevel: 4 },
  { id: 'CR', zoomLevel: 32 },
  { id: 'CF', zoomLevel: 8 },
  { id: 'CV', zoomLevel: 32 },
  { id: 'CY', zoomLevel: 32 },
  { id: 'CZ', zoomLevel: 32 },
  { id: 'DE', zoomLevel: 16 },
  { id: 'CL', zoomLevel: 2 },
  { id: 'DO', zoomLevel: 32 },
  { id: 'DZ', zoomLevel: 4 },
  { id: 'DK', zoomLevel: 32 },
  { id: 'DM', zoomLevel: 128 },
  { id: 'HU', zoomLevel: 32 },
  { id: 'IQ', zoomLevel: 8 },
  { id: 'PS', zoomLevel: 64 },
  { id: 'ER', zoomLevel: 16 },
  { id: 'ES', zoomLevel: 4 },
  { id: 'EE', zoomLevel: 32 },
  { id: 'EG', zoomLevel: 8 },
  { id: 'DJ', zoomLevel: 32 },
  { id: 'FI', zoomLevel: 8 },
  { id: 'FJ', zoomLevel: 32 },
  { id: 'FM', zoomLevel: 64 },
  { id: 'EC', zoomLevel: 8 },
  { id: 'GB', zoomLevel: 8 },
  { id: 'GD', zoomLevel: 64 },
  { id: 'GE', zoomLevel: 16 },
  { id: 'GA', zoomLevel: 16 },
  { id: 'ET', zoomLevel: 8 },
  { id: 'GQ', zoomLevel: 32 },
  { id: 'GR', zoomLevel: 16 },
  { id: 'GM', zoomLevel: 64 },
  { id: 'GN', zoomLevel: 16 },
  { id: 'FR', zoomLevel: 8 },
  { id: 'HR', zoomLevel: 16 },
  { id: 'GW', zoomLevel: 64 },
  { id: 'HN', zoomLevel: 32 },
  { id: 'GH', zoomLevel: 16 },
  { id: 'ID', zoomLevel: 4 },
  { id: 'IE', zoomLevel: 32 },
  { id: 'IL', zoomLevel: 16 },
  { id: 'GT', zoomLevel: 16 },
  { id: 'IR', zoomLevel: 8 },
  { id: 'IS', zoomLevel: 32 },
  { id: 'IT', zoomLevel: 8 },
  { id: 'HT', zoomLevel: 32 },
  { id: 'KE', zoomLevel: 8 },
  { id: 'JO', zoomLevel: 16 },
  { id: 'JP', zoomLevel: 4 },
  { id: 'IN', zoomLevel: 4 },
  { id: 'KP', zoomLevel: 16 },
  { id: 'KI', zoomLevel: 64 },
  { id: 'KM', zoomLevel: 64 },
  { id: 'KN', zoomLevel: 64 },
  { id: 'JM', zoomLevel: 32 },
  { id: 'KW', zoomLevel: 64 },
  { id: 'KZ', zoomLevel: 4 },
  { id: 'LA', zoomLevel: 8 },
  { id: 'KH', zoomLevel: 16 },
  { id: 'LB', zoomLevel: 64 },
  { id: 'LI', zoomLevel: 64 },
  { id: 'LK', zoomLevel: 32 },
  { id: 'KR', zoomLevel: 16 },
  { id: 'LU', zoomLevel: 64 },
  { id: 'LV', zoomLevel: 32 },
  { id: 'LY', zoomLevel: 8 },
  { id: 'LC', zoomLevel: 32 },
  { id: 'MA', zoomLevel: 8 },
  { id: 'MD', zoomLevel: 32 },
  { id: 'ME', zoomLevel: 32 },
  { id: 'MG', zoomLevel: 8 },
  { id: 'LT', zoomLevel: 16 },
  { id: 'MH', zoomLevel: 128 },
  { id: 'ML', zoomLevel: 8 },
  { id: 'MM', zoomLevel: 4 },
  { id: 'MN', zoomLevel: 8 },
  { id: 'MC', zoomLevel: 128 },
  { id: 'MR', zoomLevel: 8 },
  { id: 'MU', zoomLevel: 64 },
  { id: 'MV', zoomLevel: 128 },
  { id: 'MW', zoomLevel: 16 },
  { id: 'MK', zoomLevel: 32 },
  { id: 'MX', zoomLevel: 4 },
  { id: 'MZ', zoomLevel: 4 },
  { id: 'NA', zoomLevel: 8 },
  { id: 'NE', zoomLevel: 8 },
  { id: 'NG', zoomLevel: 8 },
  { id: 'NO', zoomLevel: 8 },
  { id: 'NP', zoomLevel: 16 },
  { id: 'MY', zoomLevel: 8 },
  { id: 'NR', zoomLevel: 128 },
  { id: 'NZ', zoomLevel: 8 },
  { id: 'OM', zoomLevel: 8 },
  { id: 'PA', zoomLevel: 32 },
  { id: 'NI', zoomLevel: 16 },
  { id: 'PE', zoomLevel: 4 },
  { id: 'PK', zoomLevel: 8 },
  { id: 'PL', zoomLevel: 16 },
  { id: 'NU', zoomLevel: 64 },
  { id: 'PT', zoomLevel: 16 },
  { id: 'PH', zoomLevel: 8 },
  { id: 'RO', zoomLevel: 16 },
  { id: 'PG', zoomLevel: 8 },
  { id: 'RS', zoomLevel: 16 },
  { id: 'PY', zoomLevel: 8 },
  { id: 'PW', zoomLevel: 128 },
  { id: 'SC', zoomLevel: 64 },
  { id: 'RW', zoomLevel: 32 },
  { id: 'SA', zoomLevel: 8 },
  { id: 'SB', zoomLevel: 32 },
  { id: 'SK', zoomLevel: 32 },
  { id: 'SG', zoomLevel: 128 },
  { id: 'SI', zoomLevel: 64 },
  { id: 'SE', zoomLevel: 8 },
  { id: 'SN', zoomLevel: 16 },
  { id: 'SO', zoomLevel: 8 },
  { id: 'SM', zoomLevel: 128 },
  { id: 'SR', zoomLevel: 16 },
  { id: 'SY', zoomLevel: 16 },
  { id: 'ST', zoomLevel: 64 },
  { id: 'SZ', zoomLevel: 64 },
  { id: 'SV', zoomLevel: 32 },
  { id: 'SS', zoomLevel: 8 },
  { id: 'TG', zoomLevel: 16 },
  { id: 'TL', zoomLevel: 32 },
  { id: 'TH', zoomLevel: 8 },
  { id: 'TJ', zoomLevel: 16 },
  { id: 'TN', zoomLevel: 16 },
  { id: 'TT', zoomLevel: 64 },
  { id: 'TO', zoomLevel: 128 },
  { id: 'TR', zoomLevel: 8 },
  { id: 'TD', zoomLevel: 4 },
  { id: 'UA', zoomLevel: 8 },
  { id: 'UG', zoomLevel: 16 },
  { id: 'TM', zoomLevel: 16 },
  { id: 'TZ', zoomLevel: 8 },
  { id: 'US', zoomLevel: 2 },
  { id: 'VC', zoomLevel: 64 },
  { id: 'TV', zoomLevel: 128 },
  { id: 'UZ', zoomLevel: 8 },
  { id: 'VE', zoomLevel: 8 },
  { id: 'VA', zoomLevel: 256 },
  { id: 'UY', zoomLevel: 16 },
  { id: 'ZA', zoomLevel: 8 },
  { id: 'WS', zoomLevel: 128 },
  { id: 'YE', zoomLevel: 16 },
  { id: 'ZW', zoomLevel: 16 },
  { id: 'BJ', zoomLevel: 16 },
  { id: 'BJ', zoomLevel: 16 },
  { id: 'BI', zoomLevel: 32 },
  { id: 'BF', zoomLevel: 16 },
  { id: 'NL', zoomLevel: 32 },
  { id: 'GY', zoomLevel: 16 },
  { id: 'VN', zoomLevel: 8 },
  { id: 'VU', zoomLevel: 32 },
  { id: 'SD', zoomLevel: 8 },
  { id: 'LS', zoomLevel: 32 },
  { id: 'AF', zoomLevel: 8 },
  { id: 'BN', zoomLevel: 32 },
  { id: 'KG', zoomLevel: 16 },
  { id: 'LR', zoomLevel: 16 },
  { id: 'CU', zoomLevel: 16 },
  { id: 'ZM', zoomLevel: 8 },
  { id: 'CN', zoomLevel: 2 },
  { id: 'SL', zoomLevel: 32 },
  { id: 'MT', zoomLevel: 128 },
  { id: 'QA', zoomLevel: 64 },
  { id: 'RU', zoomLevel: 2, zoomGeoPoint: { longitude: 100.298353531168, latitude: 60.31299368319977 } }
])
