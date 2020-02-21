
export const initAnimation = (mapBuilder) => {
  mapBuilder.animation = mapBuilder.map.animate({ property: 'deltaLongitude', to: 200000 }, 20000000)
}

const stopStartDelayAnimation = (mapBuilder) => () => {
  mapBuilder.animation.pause()
  setAnimationDelay(mapBuilder)
}

const setAnimationDelay = (mapBuilder) => () => {
  const { animation, delayed } = mapBuilder

  if(delayed) clearTimeout(delayed)

  mapBuilder.delayed = setTimeout(() => {
    animation.resume()
    clearTimeout(delayed)
    mapBuilder.delayed = ''
  }, 3000)
}

export const setAnimationEventsOnSeriesContainer = (mapBuilder) => {
  const { events } = mapBuilder.map.seriesContainer

  events.on('down',             () => { mapBuilder.animation.pause() })
  events.on('up',               setAnimationDelay(mapBuilder))
  events.on('swipe',            stopStartDelayAnimation(mapBuilder))
  events.on('wheel',            stopStartDelayAnimation(mapBuilder))
  events.on('zoomlevelchanged', stopStartDelayAnimation(mapBuilder))
}