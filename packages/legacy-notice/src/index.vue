<i18n src="./locales/index.json"></i18n>
<template >
  <section class="mb-3" v-if="isIE">
    <Icons/>
    <hr class="my-0"/>
    <div class="row px-3 px-sm-4">
      <div class="col-12">
        <div class="alert alert-secondary fade show text-center" role="alert">
          <h3> {{$t('Browser not supported')}}: {{`${this.name} ${this.version}`}} </h3>
          <p>
            {{$t('working')}}
          </p>
          <p>
            {{$t('interim')}}
          </p>
          <div class="row justify-content-center px-5 mt-5">
            <div  class="col-1" v-for="(browser, index) in getBrowsers" v-bind:key="index" v-html="browser"></div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-0"/>
  </section>
</template>
<script>
import checkIE from 'check-ie'
import Icons   from './Icons.vue'

export default {
  name      : 'LegacyNotice',
  components: {Icons},
  props     : { minVersion   : { type: String, default: '11'  } },
  methods   : { getOptions },
  computed  : { getBrowsers },
  data,
  mounted
}

function data(){ return { isIE: false, name: '', version: '' } }

function mounted(){
  if(typeof window === 'undefined') return

  const options = this.getOptions()

  const checkIEType = typeof checkIE
  const check       = (checkIEType === 'function')? checkIE : checkIE.default

  const { isIE, name, version } = check(window.navigator.userAgent, options)

  this.isIE    = isIE
  this.name    = name
  this.version = version
}

const chrome  = `<a href="https://www.google.com/chrome" target="_blank" rel="noopener"> ${makeIcon('chrome')} Chrome </a>`
const edge    = `<a href="https://www.microsoft.com/en-us/edge" target="_blank" rel="noopener"> ${makeIcon('edge')} Edge </a>`
const firefox = `<a href="https://www.mozilla.org/en-CA/firefox/new/" target="_blank" rel="noopener"> ${makeIcon('firefox')} Firefox </a>`
const safari  = `<a href="https://support.apple.com/downloads/safari" target="_blank" rel="noopener"> ${makeIcon('safari')} Safari </a>`

const browsers = [chrome,edge,firefox,safari]

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

function getBrowsers(){
  return shuffle(browsers)
}

function makeIcon(name){
  return `<svg  class="icon" > <use xlink:href="#icon-${name}"></use></svg>`
}

function getOptions(){
  const ie10 = true
  const ie11 = true
  const edge = true

  const ie10Opts   = { ie10 }
  const ie11OrLess = { ie10, ie11 }
  const edgeOrLess = { ie10, ie11, edge }

  if(['10', 'ie10', 'IE10'].includes(this.minVersion)) return ie10Opts
  if(['11', 'ie11', 'IE11'].includes(this.minVersion)) return ie11OrLess
  if(['edge'].includes(this.minVersion)) return edgeOrLess
}

</script>

