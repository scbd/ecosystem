import   DOptions      from '@scbd/default-options'
import { name        } from '../../package'
import   mainSNEs      from '../mainSNEs'
import   topMenuSNEs   from '../pageHeaderFixedSiteNavigationElements'

const validationMap = {
  host       : String,
  accountsUrl: String,
  searchUrl  : String,
  basePath   : String,
  mainSNEs   : Object,
  loginSNEs  : Array,
  siteNavigationElements   : Array,
  signOutUrl : String,
  dapi       : String,
  static     : Boolean
}

const dev = {
  accountsUrl: 'https://accounts.cbddev.xyz',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbddev.xyz',
  signOutUrl : 'https://www.cbd.int/user/signout',
  dapi       : 'https://dapi.cbd.int',
  static     : false,
  basePath   : '/',
  loginSNEs  : [],
  mainSNEs,
  siteNavigationElements: topMenuSNEs
}

const stg = { ...dev, ...{ accountsUrl: 'https://accounts.staging.cbd.int', searchUrl: 'https://www.cbd.int/kb/Results?q=', host: 'https://www.staging.cbd.int' }  }

const prod = { ...dev, ...{ accountsUrl: 'https://accounts.cbd.int', searchUrl: 'https://www.cbd.int/kb/Results?q=', host: 'https://www.cbd.int' } }

const environments  = { prod, stg, dev }

const dOptions = new DOptions({ environments, validationMap, name })

export default dOptions