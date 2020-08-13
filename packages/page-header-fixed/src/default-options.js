import { setDefaultOptions, getDefaultOptionsFunction } from '@scbd/default-options'
import { getUnLocale                                  } from '@scbd/locale'
import { name                                         } from '../package.json'
import   mainSNEs                                       from './mainSNEs'
import   siteNavElms                                    from './pageHeaderFixedSiteNavigationElements'

const locale = getUnLocale()

const dev = {
  accountsUrl: 'https://accounts.cbddev.xyz',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbddev.xyz',
  signOutUrl : 'https://www.cbd.int/user/signout',
  dapi       : 'https://dapi.cbd.int',
  static     : true,
  basePath   : '/',
  loginSNEs  : [],
  mainSNEs,
  siteNavElms,
  locale
}

const stg  = { ...dev, ...{ accountsUrl: 'https://accounts.staging.cbd.int', host: 'https://www.staging.cbd.int' }  }
const prod = { ...stg, ...{ accountsUrl: 'https://accounts.cbd.int',         host: 'https://www.cbd.int' } }


const environments  = { prod, stg, dev }
const validationMap = {
  host       : String,
  accountsUrl: String,
  searchUrl  : String,
  basePath   : String,
  mainSNEs   : Object,
  loginSNEs  : Array,
  siteNavElms: Array,
  signOutUrl : String,
  dapi       : String,
  static     : Boolean,
  locale     : String,
  forceEnv   : String
}


setDefaultOptions({ environments, validationMap, name }, name)

export  default getDefaultOptionsFunction(name)