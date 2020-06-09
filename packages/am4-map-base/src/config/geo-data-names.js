import { getUnLocale         } from '@scbd/locale'
import { langPoliticalUpdate } from '../countries/political-mappings/index.js'

import { english, french, spanish, arabic, russian, chinese } from '@scbd/am4-map-lib'

const en = langPoliticalUpdate(english)
const es = langPoliticalUpdate(spanish)
const ar = langPoliticalUpdate(arabic)
const fr = langPoliticalUpdate(french)
const ru = langPoliticalUpdate(russian)
const zh = langPoliticalUpdate(chinese)

const locale = getUnLocale()

export const geoDataLang = { en, es, ar, fr, ru, zh, EN: en, ES: es, AR: ar, FR: fr, ZH: zh }

export const geodataNames = geoDataLang[locale] //en default

