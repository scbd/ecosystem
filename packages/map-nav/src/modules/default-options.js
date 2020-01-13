import   DOptions   from '@scbd/default-options'
import { name     } from '../../package'
import * as config  from '@modules/map/config'
import { getUnLocale } from '@modules/locale'

const basePath      = '/countries/'
const search        = 'country'
const locale        = getUnLocale()

const prod          = { basePath, search, config, locale }
const dev           = { basePath, search, config, locale, devMode: true }
const stg           = { basePath, search, config, locale, devMode: true }

const environments  = { prod, stg, dev }
const validationMap = { search: String,  config: Object, devMode: Boolean, locale: String }
const dOptions      = new DOptions({ environments, validationMap, name })

export const DefaultOptions = dOptions