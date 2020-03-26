<template>
  <div id="app">
    <Map :options="optionsTest"/>
  </div>
</template>

<script>
import   Map              from '../src/index.vue'


export default {
  name      : 'app',
  components: { Map },
  computed  : { options, optionsTest }
}

function options(){
  return { devMode: true }
}

function optionsTest(){
  const { $isServer } = this
  const countryToolTipAction = $isServer? '' : ' href="#" onclick="window.countryToolTipAction(event)" '
  const euActionToolTipAction = $isServer? '' : ' href="#" onclick="window.euActionToolTipAction(event)" '

  if(!$isServer) registerWindowFunctions()

  return {
    params          : { },
    countryParamName: 'country',
    callBack        : (code) => console.log('callback ---- ', code),
    countryToolTipAction,
    euActionToolTipAction
  }
}

function registerWindowFunctions(){
  window.euActionToolTipAction = euActionToolTipAction
  window.countryToolTipAction = countryToolTipAction
}
function countryToolTipAction(event){
  console.log('========Window.countryToolTipAction called', event)
}
function euActionToolTipAction(){
  console.log('========Window.euActionToolTipAction called', event)
}
</script>

<style>

</style>
