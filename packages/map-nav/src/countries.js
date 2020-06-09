import   slug               from 'limax'
// import { MapBaseCountries } from '@scbd/am4-map-base'
// import { pathToFileURL } from 'url'

// import consola from 'consola'


//(await import(pathToFileURL(configFilePath).href)).default
import { countryData } from './countries-data.js' //import('./countries-data')
export const getCountry = (codeOrName) => getCountryByCode(codeOrName) || getCountryByName(codeOrName)
export const getCountryByCode = (countryCode) => countryData.find(({ code }) => code === countryCode? countryCode.toUpperCase() : '')
export const getCountryByName = (countryName) => countryData.find(matchName, { countryName })
export const isCountry = (codeOrName) => Boolean(getCountryByCode(codeOrName)) || Boolean(getCountryByName(codeOrName))

function matchName({ name }){
  const { countryName } = this

  if(!countryName) return false

  for (const langCode in name)
    if(slug(name[langCode]) === slug(countryName))
      return true
  
  return false
}