import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'
import { name                                         } from '../package.json'
import   mainSiteNavigationElement                      from './siteNavigationElements'

const locale = getUnLocale()
const dev = {
  host                 : 'https://www.cbddev.xyz',
  dapi                 : 'https://dapi.cbd.int',
  static               : true,
  siteNavigationElement: mainSiteNavigationElement,
  locale
}

const stg           = { ...dev, host: 'https://www.staging.cbd.int' }
const prod          = { ...stg, host: 'https://www.cbd.int' }

const environments  = { prod, stg, dev }
const validationMap = { host: String,  dapi: String, static: Boolean, locale: String, siteNavigationElement: Object }

setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)