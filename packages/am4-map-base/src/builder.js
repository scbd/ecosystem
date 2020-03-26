import { MapBuilderBase } from './index'
import { initAnimation, setAnimationEventsOnSeriesContainer } from './controls'

import { zoomToCountryEventHandler, pushHitEventFn, setCountryEvents } from './countries'


export class MapBuilder extends MapBuilderBase{
  constructor(element, options){
    super(element, options)

    pushHitEventFn(zoomToCountryEventHandler)
    setCountryEvents(this)

    this.events.on('ready', ready(this))
  }
}

export const countryClick =  (mapBuilder) => (ev) => {
  if (mapBuilder.lastSelected)
    mapBuilder.lastSelected.isActive = false;
  
  ev.target.series.chart.zoomToMapObject(ev.target)
  if (mapBuilder.lastSelected !== ev.target)
    mapBuilder.lastSelected = ev.target;
}

export const ready = (mapBuilder) => () =>  {
  initAnimation(mapBuilder)
  setAnimationEventsOnSeriesContainer(mapBuilder)
}
