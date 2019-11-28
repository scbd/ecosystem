<template>
  <HeaderSCBD v-bind="headerProps"/>
</template>

<script>
import makeSelector           from '@modules/makeSelector'
import HeaderSCBD             from '@src/index.vue'
import siteNavigationElements from '@modules/staticSiteNavigationElements'
import mainSNEs               from '@modules/mainSNEs'
import defaultOptions         from '@modules/defaultOptions'

export default {
  name      : 'app',
  components: { HeaderSCBD },
  data
}

function data(){
  const options     = defaultOptions({ mainSNEs })
  const headerProps = {
    siteNavigationElements: siteNavigationElements.map(mapSiteNavigationElement, options),
    options
  }

  return { headerProps }
}

function mapSiteNavigationElement(elm){
  const { host, basePath } = this
  const id                 = makeSelector(elm, 'WPH-SNE')
  const children           = elm.hasPart
  const hasPart            = (children &&  children.length)? children.map(mapSiteNavigationElement, this) : undefined

  return {
    '@context' : 'https://schema.org',
    '@type'    : 'SiteNavigationElement',
    '@id'      : `${host}${basePath}#${id}`,
    cssSelector: `#${id}`,
    xpath      : `//*[@id="${id}"]`,
    ...Object.assign(elm, { hasPart })
  }
}
</script>