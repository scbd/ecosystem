import checkIE from 'check-ie'

export const get$http = async () => {
  await loadPollyFillIfNeeded()

  if(getGlobal().$http) return getGlobal().$http

  getGlobal().$http = (await import(/* webpackChunkName: "ky-universal" */ 'ky-universal')).default

  return getGlobal().$http
}

export const toURLSearchParams = (params) => {
  if (!params) return undefined

  const urlEncodedUrlParams = {}
  const paramKeys           = Object.keys(params)

  paramKeys.forEach((key) => {
    let value = params[key];

    if (value instanceof Object)    value = JSON.stringify(value, null, '')
    else if (value instanceof Date) value = value.toISOString()

    urlEncodedUrlParams[key] = value
  });

  return new URLSearchParams(urlEncodedUrlParams)
}

async function loadPollyFillIfNeeded(){
  if(typeof window === 'undefined') return

  const checkIEType = typeof checkIE
  const check = (checkIEType === 'function')? checkIE : checkIE.default

  if(check(window.navigator.userAgent).isIE && !window.polyfillFetch)
    window.polyfillFetch = await import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch')
}

function getGlobal(){
  if(typeof globalThis !== 'undefined') return globalThis // eslint-disable-line  
  if(typeof window     !== 'undefined') return window
  if(typeof global     !== 'undefined') return global
  if(typeof self       !== 'undefined') return self

  throw new Error('getGlobal: failed to retrieve global object')
}
