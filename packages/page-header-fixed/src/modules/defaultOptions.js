const optionValidationMap = {
  host       : String,
  accountsUrl: String,
  searchUrl  : String,
  basePath   : String,
  mainSNEs   : Object,
  loginSNEs  : Array,
  sideSNEs   : Array,
  signOutUrl : String
}

const dev = {
  accountsUrl: 'https://accounts.cbddev.xyz',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbddev.xyz',
  basePath   : '/',
  mainSNEs   : [],
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout'
}

const stg = {
  accountsUrl: 'https://accounts.staging.cbd.int',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.staging.cbd.int',
  basePath   : '/',
  mainSNEs   : [],
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout'
}

const prod = {
  accountsUrl: 'https://accounts.cbd.int',
  searchUrl  : 'https://www.cbd.int/kb/Results?q=',
  host       : 'https://www.cbd.int',
  basePath   : '/',
  mainSNEs   : [],
  loginSNEs  : [],
  sideSNEs   : [],
  signOutUrl : 'https://www.cbd.int/user/signout'
}

function defaultOptions (userOptions){
  validateOptions(userOptions)
  const options = Object.assign(getDefaultOptions(), userOptions)

  return options
}

function getDefaultOptions(){
  if(!window) return prod
  
  if(window.location.href.includes('staging.cbd.int')) return stg
  if(window.location.href.includes('cbddev.xyz')) return dev
  if(window.location.href.includes('www.cbd.int')) return prod

  return prod
}

function validateOptions (userOptions){
  for (const key in userOptions){
    const rType = typeof userOptions[key]
    const eType = optionValidationMap[key]

    if(!Object.keys(optionValidationMap).includes(key)) removeUnknownKey(userOptions, key)

    if(userOptions[key].prototype instanceof eType)  errorUnknownType(key, rType, eType)
  }
}

function removeUnknownKey (options, key){
  delete(options, key)
  console.warn(`${key} not permitted in @ecosystem/page-header-fixed component options`) // eslint-disable-line
}

function errorUnknownType (key, rType, eType){
  throw new Error(`${key} has incorrect type.  Received: ${rType} Expected: ${eType}`)
}

export default defaultOptions