import getNetSpeed from '@scbd/net-speed'

export { createFromConfig, useTheme, percent, TextLink, Button, Sprite, MouseCursorStyle } from './amcharts4/core'
export { hasPoliticalMappings, findByParent, langPoliticalUpdate, getPoliticalRelations } from './political-mappings/index.mjs'

export { MapChart, projections        } from './amcharts4/maps'
export { default as am4themesAnimated } from './amcharts4/.internal/themes/animated'
export { ar, en, es, fr, ru, zh       } from './lang.mjs'
export { politicalMap                 } from './political-mappings/config.mjs'


export const worldGeoData    = getGeoData()
export const getWorldGeoData = getGeoData


async function getGeoData(name){
  if(name && [ 'worldLow', 'worldHigh', 'worldUltra' ].includes(name)){
    if(name === 'worldLow') return import('./worldLow')
    if(name === 'worldHigh') return import('./worldHigh')
    if(name === 'worldUltra') return import('./worldUltra')
  }

  const speed = await getNetSpeed()

  if(speed === '2g') return import('./worldLow')
  if(speed === '3g') return import('./worldHigh')

  return import('./worldUltra')
}