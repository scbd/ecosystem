import { Button, Sprite, percent, TextLink } from '@amcharts/amcharts4/core'
import { projections           }     from '@amcharts/amcharts4/maps'

export const disclaimerI18n = {
  en: {
    disclaimer: 'disclaimer',
    text      : 'The designations employed and the presentation of material in this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or area or of its authorities, or concerning the delimitation of its frontiers or boundaries.'
  },
  ru: {
    disclaimer: 'Защитительная оговорка',
    text      : 'Использованные определения и представленный материал на этой карте не предполагают выражения какого-либо мнения со стороны Секретариата относительно правового статуса любой страны, территории, города или района или их властей или относительно делимитации их границ или рубежей.'
  },
  fr: {
    disclaimer: 'Clause de non-responsabilité',
    text      : 'Les désignations utilisées et la présentation des informations figurant sur cette carte n’impliquent aucune expression d’un quelconque avis de la part du Secrétariat concernant le statut juridique d’un pays, d’un territoire,d’une ville ou d’une région ou de ses autorités, ni quant à la délimitation de ses droits. frontières ou limites.'
  },
  ar: {
    disclaimer: 'إخلاء المسؤولية',
    text      : 'التسميات المستخدمة وعرض المواد في هذه الخريطة لا يعنيان التعبير عن أي رأي من جانب الأمانة العامة فيما يتعلق بالوضع القانوني لأي بلد أو إقليم أو مدينة أو منطقة أو للسلطات التابعة لها، أو فيما يتعلق بتعيين الحدود أو المناطق الحدودية.'
  },
  es: {
    disclaimer: 'Declinación de responsabilidad',
    text      : 'Las designaciones empleadas y la presentación del material en este mapa no implican la expresión de ninguna opinión por parte de la Secretaría sobre el estado legal de ningún país, territorio, ciudad o área o de sus autoridades, o sobre la delimitación de su fronteras o límites.'
  },
  zh: {
    disclaimer: '免责声明',
    text      : '本地图中使用的名称和列示的材料并不意味着秘书处就任何国家、领土，城市或地区或其当局的法律地位或其边界的划界表达任何意见。'
  }
}
export const disclaimerButton =  ({ map, locale }) => {
  const button = map.chartContainer.createChild(TextLink)

  button.padding(5, 5, 5, 5)
  button.align       = 'right'
  button.marginRight = 0
  button.y           = percent(99)
  button.text        = disclaimerI18n[locale].disclaimer
  button.fontFamily  = 'BenchNine, sans-serif'
  button.fontSize    = 11

  button.events.on('hit', () => {
    map.openModal(disclaimerI18n[locale].text)
  })
}
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

export const initControls = (builder) => {
  homeButton(builder)
  projectionButton(builder)
  disclaimerButton(builder)
}