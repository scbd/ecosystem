import { getDefaultOptions, MapBaseConfig } from './index'

export default {
  props  : { options: { type: Object } },
  methods: { whenOptions, watchOptions },
  created,
  data,
  beforeDestroy,
  errorCaptured
}

function data (){ return { map: {}, opts: {}, config: undefined } }
function beforeDestroy(){ dispose(this.map) }
async function created(){ this.opts = await this.whenOptions() }
function dispose(map){ if(map && map.dispose) map.dispose() }

function errorCaptured(err, vm){
  dispose(vm.$data.map)
  console.error(err)
}

async function watchOptions(mapName){
  this.config = this.config? this.config : await MapBaseConfig.getJsonConfig(mapName)

  return (resolve, reject) => {
    const timeout = setTimeout(() => {
      clearInterval(timer)
      reject(new Error('@scbd/am4-map-base: options prop not received - timeout after 5 seconds'))
    }, 5000)

    const timer = setInterval(() => {
      if(!this.options) return

      clearInterval(timer)
      clearTimeout(timeout)
      return resolve({ ...getDefaultOptions(), ...this.options, config: this.config })
    }, 100)
  }
}

async function whenOptions(mapName){
  return new Promise(await this.watchOptions(mapName))
}
