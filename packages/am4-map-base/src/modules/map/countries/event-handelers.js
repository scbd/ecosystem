import { setCountryState } from './service'

export const onHitDevMode = (mapBuilder) => (ev) => {
  if(!mapBuilder.options.devMode) return
  const code  = ev.target.dataItem.dataContext.id
  const geo   = mapBuilder.map.svgPointToGeo(ev.svgPoint)

  console.log({ ...geo, code })
}

export const setStateHover = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'hover', mapBuilder)
}

export const resetCountryState = (mapBuilder) => (ev) => {
  const code = ev.target.dataItem.dataContext.id

  setCountryState(code, 'default', mapBuilder)
}