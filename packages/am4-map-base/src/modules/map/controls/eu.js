export const configEuButton = (mapBuilder, callBack) => {
  const button     = mapBuilder.euSeries.mapImages.create()
  const { locale } = mapBuilder.options

  button.latitude   = 47.241955823271525
  button.longitude  = -20.103435546206896
  button.name       = name[locale]

  button.appear()
  button.events.on('hit', callBack(mapBuilder))
}