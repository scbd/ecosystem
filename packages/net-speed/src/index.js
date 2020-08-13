import mean from 'lodash.mean'

const test    = { startTime: 0, speed: 0, download: undefined }
const tests   = [ { ...test }, { ...test }, { ...test } ]

const loadingInterval = (index) => (resolve) => {
  const timeout = setTimeout(() => {
    clearInterval(timer)
    resolve(0)
  }, 5000)

  const timer = setInterval(() => {
    if(!tests[index].speed) return

    clearInterval(timer)
    clearTimeout(timeout)
    return resolve(tests[index].speed)
  }, 100)
}

export default () => getSpeed([ init(0), init(1), init(2) ])

function init(index){
  const targetUrl = `https://attachments.cbd.int/01.svg?n=${ Math.random() }`
  
  tests[index].download        = new Image()
  tests[index].startTime       = (new Date()).getTime()
  tests[index].download.src    = targetUrl
  tests[index].download.onload = () => tests[index].speed = getIndividualSpeed(tests[index])

  return new Promise(loadingInterval(index))
}

async function getSpeed(testResults){
  const isServer  = typeof window === 'undefined'

  if(isServer) return ranOnServer()

  const meanSpeed = mean(await Promise.all(testResults))

  return getNetType(meanSpeed)
}

function ranOnServer(){
  console.warn('@scbd/net-speed is not ment to be ran on the server')

  return 0
}

function getNetType(speed){
  if(!speed) return '5g'
  if(speed < 0.01) return '2g'
  if(speed < 0.02) return '3g'
  if(speed < 1) return '4g'
  
  return '5g'
}


function getIndividualSpeed(test){
  const endTime    = (new Date()).getTime()
  const duration   = (endTime - test.startTime) / 1000
  const bitsLoaded = 1422 * 8
  const speedBps   = (bitsLoaded / duration).toFixed(2)
  const speedKbps  = (speedBps / 1024).toFixed(4)
  const speedMbps  = (speedKbps / 1024).toFixed(4)

  return Number(speedMbps)
}

