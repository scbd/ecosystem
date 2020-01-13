import { setHomeGeoPoint, setDelta, styleHomePolygon, getVisualCenter } from '../service'
import { getPoliticalRelations                                              } from '../political-mappings'
import { addCountryLabel                                                    } from '../labels'

export const setCountryHome = (id, mapBuilder) => { // eslint-disable-line
  const   code             = id.toUpperCase()
  const { animation, map } = mapBuilder
  const   relatedCountries = getPoliticalRelations(code, mapBuilder)
  const   isLast           = (index) => relatedCountries.length-1 == index

  animation.pause()

  for (const [ i, countryPolygon ] of relatedCountries.entries()){
    if(!isLast(i)) continue

    const { zoomLevel } = countryPolygon.dataItem

    map.homeZoomLevel = zoomLevel || 2
  
    if(isCustomZoomCenter(code)) setHomeToCountryFromZoomGeoPoint(map, countryPolygon)
    else setHomeToCountryFromVisualCenter(map, countryPolygon)
      
    addCountryLabel(countryPolygon, mapBuilder)
    styleHomePolygon(countryPolygon)
  }
  
  map.goHome(2500)
}

const isCustomZoomCenter = (code) => [ 'RU' ].includes(code)

const setHomeToCountryFromVisualCenter = (map, countryPolygon) => {
  const lngLat = getVisualCenter(countryPolygon)

  setHomeToCountry(map, lngLat)
}

const setHomeToCountryFromZoomGeoPoint = (map, countryPolygon) => {
  const { zoomGeoPoint } = countryPolygon.dataItem

  setHomeToCountry(map, zoomGeoPoint)
}

const setHomeToCountry = (map, lngLat) => {
  setDelta(map, lngLat)
  setHomeGeoPoint(map, lngLat)
}