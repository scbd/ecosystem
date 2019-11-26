<template>
  <div id="app">

    <HeaderSCBD v-bind="headerProps"/>

  </div>
</template>

<script>
import makeSelector           from '@modules/makeSelector'
import HeaderSCBD            from '@src/index.vue'
import siteNavigationElements from '@modules/staticSiteNavigationElements.js'

const HOST = process.env.VUE_APP_HOST

export default {
  name      : 'app',
  components: { HeaderSCBD },
  data
}

function data(){
  const basePath = ''
  const headerProps = {
    siteNavigationElements: siteNavigationElements.map(mapSiteNavigationElement, { basePath }),
    basePath
  }

  return { headerProps }
}

function mapSiteNavigationElement(elm){
  const { basePath } = this
  const id           = makeSelector(elm, 'SNE')
  const children     = elm.hasPart
  const hasPart      = (children &&  children.length)? children.map(mapSiteNavigationElement, this) : undefined

  return {
    '@context' : 'https://schema.org',
    '@type'    : 'SiteNavigationElement',
    '@id'      : `${HOST}${basePath}/#${id}`,
    cssSelector: `#${id}`,
    xpath      : `//*[@id="${id}"]`,
    ...Object.assign(elm, { hasPart })
  }
}
</script>