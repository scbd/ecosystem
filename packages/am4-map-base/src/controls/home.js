import { Button, Sprite } from '@scbd/am4-map-lib'

export const homeButton = ({ map }) => {
  const button = map.chartContainer.createChild(Button)

  button.padding(5, 5, 5, 5)
  button.align = 'right'
  button.marginRight = 15
  button.events.on('hit', (evt) => {
    const map = evt.target._parent._parent
    
    if(!map.homeGeoPoint) return map.goHome(3000)

    map.deltaLatitude = -map.homeGeoPoint.latitude
    map.deltaLongitude = -map.homeGeoPoint.longitude
    map.goHome(3000)
  })
  button.icon = new Sprite()
  button.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8'
}