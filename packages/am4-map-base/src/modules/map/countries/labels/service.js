import { alts, altLat, altLng } from './alternate-sets'

export const  addCountryLabel = (p, mapBuilder) => { // eslint-disable-line

  const { text  } = getCountryData(p)
  const   ls      = getLabelSeries(p, mapBuilder)
  const   label   = ls.mapImages.create()

  label.latitude  = getLat(p)
  label.longitude = getLng(p)
  label.text      = text

  label.children.getIndex(0).text = text

  label.appear()
  ls.toFront()
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