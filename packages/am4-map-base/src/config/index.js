import { useTheme, am4themesAnimated, getWorldGeoData, ar, en, es, fr, ru, zh } from '@scbd/am4-map-lib'
import { getUnLocale         } from '@scbd/locale'
import { euButtonSeries, euSeries } from '../eu/config'
import { euCountries              } from '../countries'

useTheme(am4themesAnimated)

const userStyle = { }

export const styleDefault   = { label: '#ffffff', water: '#BBDEFB', default: '#01463a', country: '#01463a', hover: '#9a5917', active: '#9a5917', fontFamily: 'BenchNine, sans-serif' }
export const getStyle       = () => ({ ...styleDefault, ...userStyle })
export const responsive     = { enabled: true }
export const zoomControl    = {}
export const chartContainer = {}
export const propertyFields = { latitude: 'latitude', longitude: 'longitude',  text: 'text', name: 'name', zoomLevel: 'zoomLevel', zoomGeoPoint: 'zoomGeoPoint' }

export const setStyle = (stl) => {
  for (const [ prop, value ] of stl)
    userStyle[prop] = value
}

export const labelTemplate = {
  type            : 'Label',
  horizontalCenter: 'middle',
  verticalCenter  : 'middle',
  fontSize        : 16,
  fontWeight      : 700,
  fill            : getStyle().label,
  fontFamily      : getStyle().fontFamily,
  nonScaling      : true
}

export const labelTemplateAlt = { ...labelTemplate, fill: '#000000' }

export const backgroundSeries= {
  mapPolygons: {
    polygon: {
      fill       : getStyle().water,
      fillOpacity: 1
    }
  }
}

export const countries = {
  type                 : 'MapPolygonSeries',
  id                   : 'mapSeries',
  exclude              : euCountries,
  useGeodata           : true,
  tooltip              : { background: { fill: getStyle().country }, getFillFromObject: false, fontFamily: getStyle().fontFamily, keepTargetHover: false },
  propertyFields,
  calculateVisualCenter: true,
  mapPolygons          : {
    template: {
      tooltipPosition: 'pointer',
      tooltipText    : '{name}',
      fill           : getStyle().country,
      stroke         : getStyle().hover,
      strokeWidth    : 0.5,
      states         : { hover: { properties: { fill: getStyle().hover } }, active: { properties: { fill: getStyle().hover } } }
    }
  }
}

export const grid = {
  id       : 'gridSeries',
  type     : 'GraticuleSeries',
  fitExtent: false,
  mapLines : {
    template: {
      line: {
        stroke       : '#b1d3f0',
        strokeOpacity: 1
      }
    }
  }
}

export const countryLabelSeries = {
  type     : 'MapImageSeries',
  id       : 'labelSeries',
  mapImages: { propertyFields, children: [ labelTemplate ] }
}

export const countryLabelAltSeries = {
  type     : 'MapImageSeries',
  id       : 'labelSeriesAlt',
  mapImages: { propertyFields, children: [ labelTemplateAlt ] }
}

export const getSeries = async (mapName) => [ grid, countryLabelSeries, countryLabelAltSeries, euButtonSeries(propertyFields), euSeries({ getStyle, propertyFields, geoData: (await getWorldGeoData(mapName)).default }), countries ]

export const getJsonConfig = async (mapName) => ({
  geodata       : (await getWorldGeoData(mapName)).default,
  projection    : 'Orthographic',
  panBehavior   : 'rotateLongLat',
  paddingTop    : 20,
  paddingBottom : 20,
  paddingRight  : 20,
  paddingLeft   : 20,
  deltaLongitude: -10,
  backgroundSeries,
  zoomControl,
  chartContainer,
  series        : await getSeries(mapName),
  responsive,
  geodataNames  : getGeodataNames()
})

function getGeodataNames(){
  const locale = getUnLocale()
  const langs  = { ar, en, es, fr, ru, zh }

  return langs[locale]
}