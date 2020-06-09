import { percent, TextLink } from '@scbd/am4-map-lib'

const disclaimerI18n = {
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