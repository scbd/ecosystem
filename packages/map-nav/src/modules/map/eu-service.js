import { clickUrl, pushOverEventFn, setHomeToCountryFromVisualCenter, styleHomePolygon } from './country-service'
import { hasMap,   politicalMapKeys } from './political-mapping'
import { euFlag                      } from './config'

const isEuByPolitics = () => politicalMapKeys.filter((k) => countries.includes(hasMap(k)))

export const countries = [ 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE' ]

export const name = { en: 'European Union',  fr: 'Union Européenne', es: 'Unión Europea', ru: 'Европейский союз', zh: '欧盟', ar: 'الاتحاد الأوروبي' }

export const isEu = (code) => countries.concat(isEuByPolitics).includes(code)

export const configEuButton = (mapBuilder) => {
  const button     = mapBuilder.euSeries.mapImages.create()
  const { locale } = mapBuilder.options

  button.latitude   = 47.241955823271525
  button.longitude  = -20.103435546206896
  button.name       = name[locale]

  button.appear()
  button.events.on('hit', clickButton(mapBuilder))
}

export const hoverToolTip = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  if(!isEu(code)) return ev.target.tooltipHTML = '<span>{name}</span>'
  
  const { locale }  = mapBuilder.options
  const url         = clickUrl(mapBuilder, code)
  const euUrl       = clickUrl(mapBuilder, 'EUR')
  const euToolTip   = `<div style="text-align:center; color:#ffffff;">
                        <a href="${url}" style="display:block;color:#ffffff;">{name}</a>
                        <a href="${euUrl}" style="display:block;margin-bottom:-10px;"> 
                          <img src="${euFlag}" style="max-width:20px;" />
                        </a>
                        <br>
                        <a href="${euUrl}" style="display:block;color:#ffffff; font-size:.75em;margin-top:-15px;" > ${name[locale]} </a>
                      </div>`

  ev.target.tooltipHTML = euToolTip
}

pushOverEventFn(hoverToolTip)

export const clickButton =  ({ options }) => () => { window.location.href = clickUrl({ options }, 'EUR') }

const euFourPoints = { north: '', south: '', east: '', west: '' }

const setEuFourPoints = (country) => {
  const { north, south, east, west } = country

  if(!euFourPoints.north || north > euFourPoints.north) euFourPoints.north = north
  if(!euFourPoints.south || south < euFourPoints.south) euFourPoints.south = south
  if(!euFourPoints.west  || west  < euFourPoints.west) euFourPoints.west   = west
  if(!euFourPoints.east  || east  > euFourPoints.east) euFourPoints.east   = east
}

export const euHome = (mapBuilder) => {// eslint-disable-line
  const { map, mapSeries } = mapBuilder

  mapBuilder.animation.pause()

  // Find extreme coordinates for all pre-zoom countries
  for (const code of countries){
    const country = mapSeries.getPolygonById(code)

    setEuFourPoints(country)
    map.homeZoomLevel = 2.996
    styleHomePolygon(country, { hideToolTip: false })

    if(code!=='CZ') continue

    setHomeToCountryFromVisualCenter(map, country)
    addEuLabel(mapBuilder, country)
    country.deepInvalidate()
  }
  
  const { north, south, east, west } = euFourPoints

  map.zoomToRectangle(north, south, east, west, 0.7, true)
}

export const addEuLabel = ({ labelSeries, locale }, countryPolygon) => {
  const text       = name[locale]
  const label      = labelSeries.mapImages.create()

  label.latitude  = countryPolygon.visualLatitude
  label.longitude = countryPolygon.visualLongitude -1.5
  label.text      = text

  label.children.getIndex(0).text = text
  label.appear()
  labelSeries.toFront()
}

export const addEuButton = ({ euSeries, locale }) => {
  const button = euSeries.mapImages.create()

  button.latitude  = 42.17757372128014
  button.longitude = -18.571637339594776
  button.title     = name[locale]

  button.appear()
  euSeries.toFront()
}