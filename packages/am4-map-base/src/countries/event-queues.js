const overEventQueue = []
const outEventQueue  = []
const hitEventQueue  = []

const overCountry = (mapBuilder) => (ev) => {
  for (const eventFunction of overEventQueue)
    eventFunction(mapBuilder)(ev)
}

const outCountry = (mapBuilder) => (ev) => {
  for (const eventFunction of outEventQueue)
    eventFunction(mapBuilder)(ev)
}

const hitCountry = (mapBuilder) => (ev) => {
  for (const eventFunction of hitEventQueue)
    eventFunction(mapBuilder)(ev)
}

export const pushOutEventFn  = (fn) => outEventQueue.push(fn)
export const pushOverEventFn = (fn) => overEventQueue.push(fn)
export const pushHitEventFn  = (fn) => hitEventQueue.push(fn)

export const setCountryEvents = (mapBuilder) => {
  mapBuilder.addCountryEvent('over', overCountry(mapBuilder))
  mapBuilder.addCountryEvent('hit',  hitCountry(mapBuilder))
  mapBuilder.addCountryEvent('out',  outCountry(mapBuilder))
}