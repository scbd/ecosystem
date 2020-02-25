import { alts, altLat, altLng } from './config'

const labelMap = new Map()

const labelExists = (code) => {
  if(!labelMap.has(`L-${code}`)) return false

  return true
}

export const  addCountryLabel = (p, mapBuilder) => { // eslint-disable-line

  const { text  } = getCountryData(p)
  const   ls      = getLabelSeries(p, mapBuilder)
  const   label   = ls.mapImages.create()
  const   code    = p.dataItem.dataContext.id

  if(labelExists(code)) return labelMap.get(`L-${code}`).setVisibility(true)

  label.latitude  = getLat(p)
  label.longitude = getLng(p)
  label.text      = text
  label.id        = `L-${code}`

  label.children.getIndex(0).text = text

  label.appear()
  if(!labelExists(code))
    labelMap.set(`L-${code}`, label)

  ls.toFront()
}

export const  deleteCountryLabel = () => { // eslint-disable-line

  for (const label of labelMap.values())
    label.setVisibility(false)
}

const getCountryData = (p) => {
  const latitude   = p.visualLatitude
  const longitude  = p.visualLongitude
  const text       = p.dataItem.dataContext.name
  const code       = p.dataItem.dataContext.id

  return { latitude, longitude, text, code  }
}

const getLabelSeries = (p, { labelSeries, labelSeriesAlt }) => {
  const { code } = getCountryData(p)
  const isAltLabel = alts.has(code)

  return isAltLabel ? labelSeriesAlt  : labelSeries
}

const getLat = (p) => {
  const { code, latitude } = getCountryData(p)
  const isAltLat   = altLat.has(code)

  return isAltLat? latitude  + altLat.get(code) : latitude
}

const getLng = (p) => {
  const { code, longitude } = getCountryData(p)
  const isAltLng   = altLng.has(code)

  return isAltLng? longitude + altLng.get(code) : longitude
}