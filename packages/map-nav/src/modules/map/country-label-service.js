export const alts   = [ 'AG', 'BB', 'BS', 'CK', 'CV', 'CL', 'DK', 'PS', 'ES', 'FJ', 'FM', 'EC', 'GB', 'GD', 'GQ', 'GR', 'ID', 'JP', 'KI', 'KM', 'KN', 'LC', 'MH', 'MC', 'MV', 'MZ', 'NO', 'MY', 'NR', 'NZ', 'NU', 'PH', 'PG',  'SC', 'SB', 'ST', 'TT', 'TO', 'VC', 'TV', 'VN', 'VU' ]
export const altLat = new Map([ [ 'AE', -1 ], [ 'AG', .5 ], [ 'AR', 3 ], [ 'BB', .5 ], [ 'BS', .4 ], [ 'CK', -.1 ], [ 'CM', -2 ], [ 'CR', .4 ], [ 'ER', -.4 ], [ 'FI', -2 ], [ 'FM', .5 ], [ 'GB', 4 ], [ 'GD', .5 ], [ 'GM', .2 ], [ 'GN', 1 ], [ 'HR', 1 ], [ 'ID', -4 ], [ 'IL', -.3 ], [ 'IT', 1 ], [ 'JP', 3 ], [ 'KI', .2 ], [ 'KM', .5 ], [ 'KN', .3 ], [ 'LA', 5 ], [ 'LI', .2 ], [ 'LC', .2 ], [ 'MH', .2 ], [ 'MM', 2 ], [ 'MC', -.2 ], [ 'MV', .1 ], [ 'MZ', -1.5 ], [ 'NR', .2 ], [ 'PA', .5 ], [ 'NU', .2 ], [ 'PH', -.2 ], [ 'SC', .1 ], [ 'SM', .1 ], [ 'TL', .2 ], [ 'TH', 2 ], [ 'TT', .4 ], [ 'TO', .1 ], [ 'US', -5 ], [ 'VC', .2 ], [ 'TV', .1 ], [ 'VA', .05 ], [ 'CU', .4 ]      ])
export const altLng = new Map([ [ 'CL', -8 ], [ 'PS', -.75 ], [ 'ES', -3 ], [ 'GQ', -1 ], [ 'GR', 1 ], [ 'IL', -.3 ], [ 'HT', .8 ], [ 'JO', 1 ], [ 'IN', -3 ], [ 'MD', .5 ], [ 'MW', -.5 ], [ 'MZ', 4 ], [ 'NO', -10 ], [ 'NZ', -3.5 ], [ 'OM', 1 ], [ 'PT', -.4 ], [ 'PG', 2 ], [ 'RU', 95 ], [ 'SE', -2.5 ], [ 'SO', .5 ], [ 'US', 20 ], [ 'VN', 4 ], [ 'CA', -12 ]       ])


export const  addCountryLabel = (p, { labelSeries, labelSeriesAlt }) => { // eslint-disable-line

  const latitude   = p.visualLatitude
  const longitude  = p.visualLongitude
  const text       = p.dataItem.dataContext.name
  const code       = p.dataItem.dataContext.id
  const isAltLabel = alts.includes(code)
  const isAltLat   = altLat.has(code)
  const isAltLng   = altLng.has(code)
  const ls         = isAltLabel ? labelSeriesAlt  : labelSeries
  const label      = ls.mapImages.create()

  label.latitude  = isAltLat? latitude  + altLat.get(code) : latitude
  label.longitude = isAltLng? longitude + altLng.get(code) : longitude
  label.text = text
  label.children.getIndex(0).text = text

  label.appear()
  ls.toFront()
}