import { langPoliticalUpdate } from '../countries/political-mappings/index.js'
import { getUnLocale         } from '../../locale'

import  english from '@amcharts/amcharts4-geodata/lang/EN'
import  spanish from '@amcharts/amcharts4-geodata/lang/ES'
import  arabic  from '@amcharts/amcharts4-geodata/lang/AR'
import  french  from '@amcharts/amcharts4-geodata/lang/FR'
import  russian from '@amcharts/amcharts4-geodata/lang/RU'
import  chinese from '@amcharts/amcharts4-geodata/lang/cn_ZH'

const en = langPoliticalUpdate(english)
const es = langPoliticalUpdate(spanish)
const ar = langPoliticalUpdate(arabic)
const fr = langPoliticalUpdate(french)
const ru = langPoliticalUpdate(russian)
const zh = langPoliticalUpdate(chinese)

const locale = getUnLocale()

export const geoDataLang = { en, es, ar, fr, ru, zh, EN: en, ES: es, AR: ar, FR: fr, ZH: zh }

export const geodataNames = geoDataLang[locale] //en default

