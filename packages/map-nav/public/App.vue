<template>
  <header id="app" >
    <div class="row">
      <div class="col-12">
        <NavMap :options="options"/>
      </div>
    </div>
  </header>
</template>

<script>
import NavMap from '../src/index.vue'
export default {
  name      : 'AmNavMap',
  components: { NavMap },
  computed  : { options: buildOptions }
  // methods   : { callBack, registerWindowFunctions, euActionToolTipActionListener, countryToolTipActionListener }
}

function buildOptions(){
  const { $isServer, $route } = this || {}
  const { params }            = $route || {}
  const countryToolTipAction  = $isServer? '' : (code) => ` href="#" onclick="window.countryToolTipAction(event, '${code}')" `
  const euActionToolTipAction = $isServer? '' : (code) => ` href="#" onclick="window.euActionToolTipAction(event, '${code}')" `
  const euIdentifier          = 'eu'
  const initEu                = false // false means manually init eu with custom functionality

  if(!$isServer) registerWindowFunctions()

  return {
    params,
    countryParamName: 'country',
    callBack,
    countryToolTipAction,
    euActionToolTipAction,
    euIdentifier,
    initEu
  }
}

function callBack(code){
  //this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('======== main callback '+code)
}

function registerWindowFunctions(){
  window.euActionToolTipAction = euActionToolTipActionListener
  window.countryToolTipAction  = countryToolTipActionListener
}

function countryToolTipActionListener(event, code){
  event.preventDefault()
  //this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('========Window.countryToolTipAction called '+code, event)
}

function euActionToolTipActionListener(event, code){
  event.preventDefault()
  // this.$router.push({ path: `/countries/${code.toLowerCase()}` })
  console.log('========Window.euActionToolTipAction called: '+code, event)
}
</script>

<style scoped>
#map            { width: 100%; max-width: 100vw; height: 500px; }
#spine-pictoral { width: 100%; height: 100%; }
#hidden-map {
  width     : 100%;
  height    : 500px;
  visibility: hidden;
  position  : absolute;
  top       : 0px;
  max-width : 100vw;
}
</style>