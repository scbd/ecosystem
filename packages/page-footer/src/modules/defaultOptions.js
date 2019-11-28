const optionValidationMap = {
  host    : String,
  basePath: String
}

const dev = {
  host    : 'https://www.cbddev.xyz',
  basePath: '/'
}

const stg = {
  host    : 'https://www.staging.cbd.int',
  basePath: '/'
}

const prod = {
  host    : 'https://www.cbd.int',
  basePath: '/'
}

function defaultOptions (userOptions = {}){
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