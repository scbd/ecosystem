export const zoomLevelData =  [ 
  { id: 'AD', zoomLevel: 128},
  { id: 'AE', zoomLevel: 32},
  { id: 'AG', zoomLevel: 32},
  { id: 'AL', zoomLevel: 32},
  { id: 'AO', zoomLevel: 8},  
  { id: 'AR', zoomLevel: 2},  
  { id: 'AT', zoomLevel: 32},
  { id: 'AU', zoomLevel: 2},
  { id: 'BB', zoomLevel: 32},
  { id: 'AM', zoomLevel: 32},
  { id: 'BA', zoomLevel: 32},
  { id: 'BD', zoomLevel: 16},
  { id: 'BE', zoomLevel: 64},
  { id: 'BG', zoomLevel: 32},
  { id: 'BH', zoomLevel: 128},
  { id: 'AZ', zoomLevel: 32},
  { id: 'BO', zoomLevel: 8},
  { id: 'BR', zoomLevel: 2},
  { id: 'BS', zoomLevel: 16},
  { id: 'BT', zoomLevel: 32},
  { id: 'BY', zoomLevel: 16},
  { id: 'CA', zoomLevel: 2},
  { id: 'BZ', zoomLevel: 32},
  { id: 'CD', zoomLevel: 4},
  { id: 'CG', zoomLevel: 8},
  { id: 'CH', zoomLevel: 32},
  { id: 'CI', zoomLevel: 16},
  { id: 'CK', zoomLevel: 128},
  { id: 'BW', zoomLevel: 8},
  { id: 'CM', zoomLevel: 8},
  { id: 'CO', zoomLevel: 4},
  { id: 'CR', zoomLevel: 32},
  { id: 'CF', zoomLevel: 8},
  { id: 'CV', zoomLevel: 32},
  { id: 'CY', zoomLevel: 32},
  { id: 'CZ', zoomLevel: 32},
  { id: 'DE', zoomLevel: 16},
  { id: 'CL', zoomLevel: 2},
  { id: 'DO', zoomLevel: 32},
  { id: 'DZ', zoomLevel: 4},
  { id: 'DK', zoomLevel: 32},
  { id: 'DM', zoomLevel: 128},
  { id: 'HU', zoomLevel: 32},
  { id: 'IQ', zoomLevel: 8},
  { id: 'PS', zoomLevel: 64},
  { id: 'ER', zoomLevel: 16},
  { id: 'ES', zoomLevel: 4},
  { id: 'EE', zoomLevel: 32},
  { id: 'EG', zoomLevel: 8},
  { id: 'DJ', zoomLevel: 32},
  { id: 'FI', zoomLevel: 8},
  { id: 'FJ', zoomLevel: 32},
  { id: 'FM', zoomLevel: 64},
  { id: 'EC', zoomLevel: 8},
  { id: 'GB', zoomLevel: 8},
  { id: 'GD', zoomLevel: 64},
  { id: 'GE', zoomLevel: 16},
  { id: 'GA', zoomLevel: 16},
  { id: 'ET', zoomLevel: 8},
  { id: 'GQ', zoomLevel: 32},
  { id: 'GR', zoomLevel: 16},
  { id: 'GM', zoomLevel: 64},
  { id: 'GN', zoomLevel: 16},
  { id: 'FR', zoomLevel: 8},
  { id: 'HR', zoomLevel: 16},
  { id: 'GW', zoomLevel: 64},
  { id: 'HN', zoomLevel: 32},
  { id: 'GH', zoomLevel: 16},
  { id: 'ID', zoomLevel: 4},
  { id: 'IE', zoomLevel: 32},
  { id: 'IL', zoomLevel: 16},
  { id: 'GT', zoomLevel: 16},
  { id: 'IR', zoomLevel: 8},
  { id: 'IS', zoomLevel: 32},
  { id: 'IT', zoomLevel: 8},
  { id: 'HT', zoomLevel: 32},
  { id: 'KE', zoomLevel: 8},
  { id: 'JO', zoomLevel: 16},
  { id: 'JP', zoomLevel: 4},
  { id: 'IN', zoomLevel: 4},
  { id: 'KP', zoomLevel: 16},
  { id: 'KI', zoomLevel: 64},
  { id: 'KM', zoomLevel: 64},
  { id: 'KN', zoomLevel: 64},
  { id: 'JM', zoomLevel: 32},
  { id: 'KW', zoomLevel: 64},
  { id: 'KZ', zoomLevel: 4},
  { id: 'LA', zoomLevel: 8},
  { id: 'KH', zoomLevel: 16},
  { id: 'LB', zoomLevel: 64},
  { id: 'LI', zoomLevel: 64},
]

export const finnished = zoomLevelData.splice(0, zoomLevelData.length-1).map( zl => zl.id)
//{ id: 'NZ', zoomLevel: 4 } 
export const mapDataConfigZoomLevel = (series) => {
  series.dataFields.zoomLevel = 'zoomLevel'
  
  mergeData(series.data, zoomLevelData)
}

function mergeData(seriesData, newData){
  if(!seriesData.length) return seriesData = newData

  // merge existing
  for (const dataItem of seriesData){
    const newMatch = newData.find((item) => item.id===dataItem.id)

    if(newMatch) dataItem = { ...dataItem, ...newMatch }
  }

  //add ones not existing
  const seriesDataIds = seriesData.map(item => item.id)
  const toBeAdded = newData.filter((item) => !seriesDataIds.includes(item.id))

  seriesData = [ ...seriesData, ...toBeAdded ].sort((a, b) => (a.id > b.id)? 1 : -1)
}