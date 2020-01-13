import { Button, Sprite, percent } from '@amcharts/amcharts4/core'
import { projections           }     from '@amcharts/amcharts4/maps'

const projection = { list: [ 'Orthographic', 'NaturalEarth1', 'Miller', 'Mercator', 'Eckert6', 'Stereographic', 'Albers', 'AzimuthalEqualArea', 'EqualEarth' ], index: 0 }

export const projectionButton = ({ map }) => {
  const button = map.chartContainer.createChild(Button)

  button.padding(5, 5, 5, 5)
  button.align = 'right'

  button.marginRight = 15

  button.events.on('hit', () => {
    const i = projection.index

    next()

    map.projection = new projections[getCurrent()]()
    map.panBehavior = i? 'move' : 'rotateLongLat'
  })

  button.icon = new Sprite()
  button.icon.path = 'M17.528 2.983c0.131 0.131 0.131 0.331 0 0.462l-1.416 1.416c-0.181 0.181-0.432 0.281-0.683 0.281h-13.5c-0.352 0-0.643-0.291-0.643-0.643v-2.571c0-0.352 0.291-0.643 0.643-0.643h5.786v-0.643c0-0.352 0.291-0.643 0.643-0.643h1.286c0.352 0 0.643 0.291 0.643 0.643v0.643h5.143c0.251 0 0.502 0.1 0.683 0.281zM7.714 12.214h2.571v5.143c0 0.352-0.291 0.643-0.643 0.643h-1.286c-0.352 0-0.643-0.291-0.643-0.643v-5.143zM16.071 7.714c0.352 0 0.643 0.291 0.643 0.643v2.571c0 0.352-0.291 0.643-0.643 0.643h-13.5c-0.251 0-0.502-0.1-0.683-0.281l-1.416-1.416c-0.131-0.131-0.131-0.331 0-0.462l1.416-1.416c0.181-0.181 0.432-0.281 0.683-0.281h5.143v-1.929h2.571v1.929h5.786z'
  button.y = percent(40)
}

function next(){
  const length = projection.list.length
  const i = projection.index

  
  if(i+1 >= length) return projection.index = 0
  
  projection.index = i+1
}

function getCurrent(){
  return projection.list[projection.index]
}
