import { MouseCursorStyle, useTheme } from '@amcharts/amcharts4/core'
import   am4themes_animated           from '@amcharts/amcharts4/themes/animated'// eslint-disable-line

import { worldLow, langPoliticalUpdate } from './countries/political-mappings/index.js'
import { getUnLocale } from '@modules/locale'

import  english from '@amcharts/amcharts4-geodata/lang/EN'
import  spanish from '@amcharts/amcharts4-geodata/lang/ES'
import  arabic  from '@amcharts/amcharts4-geodata/lang/AR'
import  french  from '@amcharts/amcharts4-geodata/lang/FR'
import  russian from '@amcharts/amcharts4-geodata/lang/RU'
import  chinese from '@amcharts/amcharts4-geodata/lang/cn_ZH'


useTheme(am4themes_animated)

const userStyle = { }

const en = langPoliticalUpdate(english)
const es = langPoliticalUpdate(spanish)
const ar = langPoliticalUpdate(arabic)
const fr = langPoliticalUpdate(french)
const ru = langPoliticalUpdate(russian)
const zh = langPoliticalUpdate(chinese)

export const geoDataLang = { en, es, ar, fr, ru, zh, EN: en, ES: es, AR: ar, FR: fr, ZH: zh }

export const getStyle = () => ({ ...styleDefault, ...userStyle })

export const styleDefault = { label: '#ffffff', water: '#BBDEFB', country: '#01463a', hover: '#9a5917', fontFamily: 'BenchNine, sans-serif' }

export const setStyle = (stl) => {
  for (const [ prop, value ] of stl)
    userStyle[prop] = value
}

export const propertyFields = { latitude: 'latitude', longitude: 'longitude',  text: 'text', name: 'name', zoomLevel: 'zoomLevel', zoomGeoPoint: 'zoomGeoPoint' }

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

export const responsive = { enabled: true }

export const zoomControl = {}

export const chartContainer = {  }

export const countries = {
  type       : 'MapPolygonSeries',
  id         : 'mapSeries',
  useGeodata : true,
  tooltip    : { background: { fill: getStyle().country }, getFillFromObject: false, fontFamily: getStyle().fontFamily, keepTargetHover: true, label: { interactionsEnabled: true } }, //keepTargetHover: true, label: { interactionsEnabled: true }
  propertyFields,
  mapPolygons: {
    template: {
      tooltipPosition: 'fixed',
      tooltipText    : '{name}',
      fill           : getStyle().country,
      stroke         : getStyle().hover,
      strokeWidth    : 0.5,
      states         : { hover: { properties: { fill: getStyle().hover } }, active: { properties: { fill: getStyle().hover } }  }
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

export const euSeries = {
  type     : 'MapImageSeries',
  id       : 'euSeries',
  mapImages: { propertyFields,
               children: [
                 {
                   type            : 'Image',
                   cursorOverStyle : MouseCursorStyle.pointer,
                   maxWidth        : 25,
                   width           : 25,
                   nonScaling      : true,
                   visible         : true,
                   tooltipText     : '{name}',
                   horizontalCenter: 'middle',
                   verticalCenter  : 'middle',
                   href            : 'https://cdn.cbd.int/svg-country-flags@1.2.6/svg/eu.svg'
                 } ] }
}

export const series = [ grid, countryLabelSeries, countryLabelAltSeries, euSeries, countries ]

export const euFlag = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEwIDU0MCI+CjxkZXNjPkV1cm9wZWFuIGZsYWc8L2Rlc2M+CjxkZWZzPgo8ZyBpZD0icyI+CjxnIGlkPSJjIj4KPHBhdGggaWQ9InQiIGQ9Ik0wLDB2MWgwLjV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKXJvdGF0ZSgxOCkiLz4KPHVzZSB4bGluazpocmVmPSIjdCIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPgo8L2c+CjxnIGlkPSJhIj4KPHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+Cjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4KPC9nPgo8dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIi8+CjwvZz4KPC9kZWZzPgo8cmVjdCBmaWxsPSIjMDM5IiB3aWR0aD0iODEwIiBoZWlnaHQ9IjU0MCIvPgo8ZyBmaWxsPSIjZmMwIiB0cmFuc2Zvcm09InNjYWxlKDMwKXRyYW5zbGF0ZSgxMy41LDkpIj4KPHVzZSB4bGluazpocmVmPSIjcyIgeT0iLTYiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgeT0iNiIvPgo8ZyBpZD0ibCI+Cjx1c2UgeGxpbms6aHJlZj0iI3MiIHg9Ii02Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3MiIHRyYW5zZm9ybT0icm90YXRlKDE1MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSg2NikiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKXRyYW5zbGF0ZSgwLDYpcm90YXRlKDI0KSIvPgo8dXNlIHhsaW5rOmhyZWY9IiNzIiB0cmFuc2Zvcm09InJvdGF0ZSg2MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSgxMikiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoMzApdHJhbnNsYXRlKDAsNilyb3RhdGUoNDIpIi8+CjwvZz4KPHVzZSB4bGluazpocmVmPSIjbCIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPgo8L2c+Cjwvc3ZnPgo='

const locale = getUnLocale()

console.log('locale', locale)
const geodataNames = geoDataLang[locale] //en default

console.log(geoDataLang)
export const main = {
  projection           : 'Orthographic',
  panBehavior          : 'rotateLongLat',
  paddingTop           : 20,
  paddingBottom        : 20,
  paddingRight         : 20,
  paddingLeft          : 20,
  calculateVisualCenter: true,
  deltaLongitude       : -10,
  backgroundSeries,
  zoomControl,
  chartContainer,
  series,
  responsive,
  geodataNames,
  geodata              : worldLow
}