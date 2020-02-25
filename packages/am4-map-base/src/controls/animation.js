
export const initAnimation = (mapBuilder) => {
  mapBuilder.animation = mapBuilder.map.animate({ property: 'deltaLongitude', to: 200000 }, 20000000)
}


const stopStartDelayAnimation = (mapBuilder) => () => {
  mapBuilder.animation.pause()
  setAnimationDelay(mapBuilder)
}

const setAnimationDelay = (mapBuilder) => () => {
  const { animation, delayed } = mapBuilder

  if(!animation) return
  if(delayed) clearTimeout(delayed)

  if(animation.isFinished()) return

  mapBuilder.delayed = setTimeout(() => {
    clearTimeout(delayed)
    
    mapBuilder.delayed = ''
    if(!animation.isFinished())
      animation.resume()
  }, 3000)
}

const pauseAnimation = (mapBuilder) => () => {
  const { animation } = mapBuilder

  if(!animation) return
  animation.pause()
}

export const setAnimationEventsOnSeriesContainer = (mapBuilder) => {
  const { events } = mapBuilder.map.seriesContainer

  events.on('down',             pauseAnimation(mapBuilder))
  events.on('up',               setAnimationDelay(mapBuilder))
  events.on('swipe',            stopStartDelayAnimation(mapBuilder))
  events.on('wheel',            stopStartDelayAnimation(mapBuilder))
  events.on('zoomlevelchanged', stopStartDelayAnimation(mapBuilder))
}