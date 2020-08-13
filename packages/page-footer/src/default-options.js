import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'
import { name                                         } from '../package.json'

import   footerSiteNavigationElements from '../footerSiteNavigationElements'

const locale = getUnLocale()

const dev = {
  host                  : 'https://www.cbddev.xyz',
  dapi                  : 'https://dapi.cbd.int',
  static                : false,
  siteNavigationElements: footerSiteNavigationElements,
  locale
}

const stg           = { ...dev, host: 'https://www.staging.cbd.int' }
const prod          = { ...stg, host: 'https://www.cbd.int' }

const environments  = { prod, stg, dev }

const validationMap = {
  host                  : String,
  siteNavigationElements: Array,
  dapi                  : String,
  static                : Boolean,
  locale                : String
}

setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)