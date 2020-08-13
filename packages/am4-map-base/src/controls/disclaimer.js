import { percent, TextLink } from '@scbd/am4-map-lib'

const disclaimerI18n = {
  en: {
    disclaimer: 'disclaimer',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
  },
  ru: {
    disclaimer: 'Защитительная оговорка',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
  },
  fr: {
    disclaimer: 'Clause de non-responsabilité',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
  },
  ar: {
    disclaimer: 'إخلاء المسؤولية',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
  },
  es: {
    disclaimer: 'Declinación de responsabilidad',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
  },
  zh: {
    disclaimer: '免责声明',
    text      : 'The designations employed and the presentation of material on this map do not imply the expression of any opinion whatsoever on the part of the Secretariat concerning the legal status of any country, territory, city or any area or of its authorities, or concerning the delimitation of its frontiers or boundaries. \n\n* A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).'
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