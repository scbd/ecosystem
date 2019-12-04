<template>
  <PageFooter v-bind="headerProps"/>
</template>

<script>
import makeSelector           from '@modules/makeSelector'
import PageFooter             from '@src/index.vue'
import siteNavigationElements from '@modules/staticSiteNavigationElements'
import defaultOptions         from '@modules/defaultOptions'

export default {
  name      : 'app',
  components: { PageFooter },
  data
}

function data(){
  const options     = defaultOptions()
  const headerProps = {
    siteNavigationElements: siteNavigationElements.map(mapSiteNavigationElement, options),
    options
  }

  return { headerProps }
}

function mapSiteNavigationElement(elm){
  const { basePath, host } = this
  const id           = makeSelector(elm, 'WPF-SNE')
  const children     = elm.hasPart
  const hasPart      = (children &&  children.length)? children.map(mapSiteNavigationElement, this) : undefined

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