import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'
import { name                                         } from '../package.json'

const basePath      = '/'
const locale        = getUnLocale()

const dev           = { basePath, config: {}, locale, devMode: true, initControls: true, initEu: true,  euIdentifier: 'eu' }
const stg           = { ...dev }
const prod          = { ...stg }

const environments  = { prod, stg, dev }
const validationMap = { search: String,  config: Object, devMode: Boolean, locale: String, initControls: Boolean, initEu: Boolean, euIdentifier: String }

setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)