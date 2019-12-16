const dev   = { host: 'https://www.cbddev.xyz',      basePath: '/' }
const stg   = { host: 'https://www.staging.cbd.int', basePath: '/' }
const prod  = { host: 'https://www.cbd.int',         basePath: '/' }

const ENVS   = { dev, stg, prod }
const V_MAP = { host: String, basePath: String }

export default class DefaultOptions{
  constructor({ environments, validationMap, force, name }){
    environments   = {
      dev : Object.assign(ENVS.dev, environments.dev),
      stg : Object.assign(ENVS.stg, environments.stg),
      prod: Object.assign(ENVS.prod, environments.prod)
    }

    validationMap  = Object.assign(V_MAP, validationMap)

    this.props     = { environments, validationMap, force, name }
  }

  get(userOpts={}){
    const { environments } = this.props
    const   opts           = Object.assign(environments[this.env], userOpts)

    this.validate(opts)

    return opts
  }

  get env (){
    if(this.props.force) return this.props.force
    if(isServer()) return process.env.NODE_ENV || 'dev'

    return getEnv()
  }

  validate(opts){ return validate(opts, this.props.validationMap) }
}

export const validateOptions = validate


function getEnv(){
  const thisHost = window.location.href

  if(thisHost.includes('staging.cbd.int')) return 'stg'
  if(thisHost.includes('cbddev.xyz'))      return 'dev'
  if(thisHost.includes('www.cbd.int'))     return 'prod'

  return 'prod'
}

function isServer(){ return !window }

function validate (opts, vMap){
  for (const key in opts){
    const rType = opts[key].constructor
    const eType = vMap[key]

    if(!Object.keys(vMap).includes(key)) removeUnknownKey(opts, key)

    if(rType !== eType)  errorUnknownType(key, rType.name, eType.name)
  }
}

function removeUnknownKey (options, key){
  delete(options, key)
  throw new Error(`${key} not permitted in  component: options`)
}

function errorUnknownType (key, rType, eType){
  throw new Error(`${key} has incorrect type.  Received: ${rType} Expected: ${eType}`)
}