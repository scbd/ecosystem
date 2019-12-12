import   DOptions   from  '@scbd/default-options'
import { name     } from '../../package'

const validationMap = {
  host       : String,
  accountsUrl: String,
  searchUrl  : String,
  basePath   : String,
  mainSNEs   : Object,
  loginSNEs  : Array,
  sideSNEs   : Array,
  signOutUrl : String,
  dapi       : String
}

const dev = {
  accountsUrl: 'https://accounts.cbddev.xyz',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbddev.xyz',
  basePath   : '/',
  mainSNEs   : {},
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout',
  dapi       : 'https://dapi.cbd.int'
}

const stg = {
  accountsUrl: 'https://accounts.staging.cbd.int',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.staging.cbd.int',
  basePath   : '/',
  mainSNEs   : {},
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout',
  dapi       : 'https://dapi.cbd.int'
}

const prod = {
  accountsUrl: 'https://accounts.cbd.int',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbd.int',
  basePath   : '/',
  mainSNEs   : {},
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout',
  dapi       : 'https://dapi.cbd.int'
}

const environments  = { prod, stg, dev }

const dOptions      = new DOptions({ environments, validationMap, name })

export const DefaultOptions = dOptions