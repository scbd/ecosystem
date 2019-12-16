import { Button, Sprite, color } from '@amcharts/amcharts4/core'

export const backGround = {
  fill       : '#000000',
  fillOpacity: 1
}

export const backgroundSeries= {
  mapPolygons: {
    polygon: {
      fill       : '#BBDEFB',
      fillOpacity: 1
    }
  }
}

export const zoomControl = {}

export const chartContainer = { callback: homeButton }

export const countries = {
  type       : 'MapPolygonSeries',
  id         : 'mapSeries',
  useGeodata : true,
  mapPolygons: {
    template: {
      tooltipText: '{name}',
      fill       : '#01463a',
      stroke     : '#9a5917',
      strokeWidth: 0.5,
      states     : { hover: { properties: { fill: '#9a5917' } } }
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
  mapImages: {
    children: [ {
      type            : 'Label',
      horizontalCenter: 'middle',
      verticalCenter  : 'middle',
      fontSize        : 14,
      fontWeight      : 600,
      fill            : color('#ffffff'),
      nonScaling      : true
    } ]
  }
}
export const countryLabelAltSeries = {
  type     : 'MapImageSeries',
  id       : 'labelSeriesAlt',
  mapImages: {
    children: [ {
      type            : 'Label',
      horizontalCenter: 'middle',
      verticalCenter  : 'middle',
      fontSize        : 16,
      fontWeight      : 700,
      fill            : color('#000000'),
      nonScaling      : true
    } ]
  }
}

export const countryFlagSeries = {
  type     : 'MapImageSeries',
  id       : 'flagSeries',
  mapImages: {
    children: [ {
      type            : 'Image',
      maxWidth        : 50,
      nonScaling      : true,
      horizontalCenter: 'middle',
      verticalCenter  : 'bottom',
      visible         : false,
      propertyFields  : { hre: 'flag', latitude: 'latitude', longitude: 'longitude' }
    } ]
  }
}
export const series = [ grid, countries, countryLabelSeries, countryLabelAltSeries ]

export const main = {
  projection           : 'Orthographic',
  panBehavior          : 'rotateLongLat',
  paddingTop           : 20,
  paddingBottom        : 20,
  paddingRight         : 20,
  paddingLeft          : 20,
  calculateVisualCenter: true,
  deltaLongitude       : -10,
  backGround,
  backgroundSeries,
  zoomControl,
  chartContainer,
  series
}


function homeButton(){
  const button = this.createChild(Button)

  button.padding(5, 5, 5, 5)
  button.align = 'right'
  button.marginRight = 15
  button.events.on('hit', (evt) => {
    const map = evt.target._parent._parent
    
    if(!map.homeGeoPoint) return map.goHome()

    map.deltaLatitude = -map.homeGeoPoint.latitude
    map.deltaLongitude = -map.homeGeoPoint.longitude
    map.goHome()
  })
  button.icon = new Sprite()
  button.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8'
}