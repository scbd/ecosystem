const dev        = { accountsUrl: 'https://accounts.cbddev.xyz' }
const stg        = { accountsUrl: 'https://accounts.staging.cbd.int' }
const prod       = { accountsUrl: 'https://accounts.cbd.int' }

function defaultOptions(){
  if(!window) return prod
  
  if(window.location.href.includes('staging.cbd.int'))  return stg
  if(window.location.href.includes('cbddev.xyz'))       return dev
  if(window.location.href.includes('www.cbd.int'))      return prod

  return stg
}

export default defaultOptions