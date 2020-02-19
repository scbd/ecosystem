<template functional>
  <script type='application/json+ld' v-html='$options.getJsonLd(props)'></script>
</template>
<script>

export default {
  name : 'WPSideBarJsonLd',
  props: [ 'siteNavElm' ],
  getJsonLd
}

function getJsonLd({ siteNavElm }){
  if(!siteNavElm || !Object.keys(siteNavElm).length)
    return {}
  return {
    '@context' : 'https://schema.org',
    '@type'    : 'WPSideBar',
    '@id'      : siteNavElm['@id'].replace('-SNE', ''),
    cssSelector: siteNavElm.cssSelector.replace('-SNE', ''),
    xpath      : siteNavElm.xpath.replace('-SNE', ''),
    hasPart    : [ siteNavElm ]
  }
}

</script>