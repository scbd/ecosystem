const optionValidationMap = {
  host    : String,
  basePath: String,
  dapi    : String
}

const dev = {
  host    : 'https://www.cbddev.xyz',
  basePath: '/',
  dapi    : 'https://h550gxekak.execute-api.us-east-1.amazonaws.com/stg'
}

const stg = {
  host    : 'https://www.staging.cbd.int',
  basePath: '/',
  dapi    : 'https://h550gxekak.execute-api.us-east-1.amazonaws.com/stg'
}

const prod = {
  host    : 'https://www.cbd.int',
  basePath: '/',
  dapi    : 'https://dapi.cbd.int'
}

function defaultOptions (userOptions = {}){
  validateOptions(userOptions)
  const options = Object.assign(getDefaultOptions(), userOptions)

  return options
}

function getDefaultOptions(){
  if(!window) return stg
  
  if(window.location.href.includes('staging.cbd.int')) return stg
  if(window.location.href.includes('cbddev.xyz')) return dev
  if(window.location.href.includes('www.cbd.int')) return prod

  return stg
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
  throw new Error(`${key} not permitted in @ecosystem/page-header-fixed component options`)
}

function errorUnknownType (key, rType, eType){
  throw new Error(`${key} has incorrect type.  Received: ${rType} Expected: ${eType}`)
}

export default defaultOptions