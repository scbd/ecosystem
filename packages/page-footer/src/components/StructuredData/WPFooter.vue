<template functional>
  <script type='application/json+ld' v-html='$options.getJsonLd(props)'></script>
</template>
<script>

const HOST = process.env.VUE_APP_HOST

export default {
  name : 'WPFooter',
  props: [ 'siteNavigationElements', 'basePath' ],
  getJsonLd
}

function getJsonLd({ siteNavigationElements, basePath }){
  return {
    '@context' : 'https://schema.org',
    '@type'    : 'WPFooter',
    '@id'      : `${HOST}${basePath}/#pageFooter`,
    cssSelector: '#pageFooter',
    xpath      : '//*[@id="pageFooter"]',
    hasPart    : siteNavigationElements
  }
}

</script>