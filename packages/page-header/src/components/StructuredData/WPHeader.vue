<template functional>
  <script type='application/json+ld' v-html='$options.getJsonLd(props)'></script>
</template>
<script>

const HOST         = process.env.VUE_APP_HOST
const SEARCH_URL   = process.env.VUE_APP_SEARCH_URL
const ACCOUNTS_URL = process.env.VUE_APP_ACCOUNTS_URL

export default {
  name : 'WPHeader',
  props: [ 'siteNavigationElements', 'basePath' ],
  getJsonLd
}

const potentialAction =  [
  {
    '@context': 'https://schema.org',
    '@type'   : 'Action',
    name      : 'Login',
    targe     : `${ACCOUNTS_URL}/signin`
  },
  {
    '@context'   : 'https://schema.org',
    '@type'      : 'SearchAction',
    target       : `${SEARCH_URL}{query}`,
    query        : 'required',
    'query-input': 'required name = query',
    url          : HOST
  }
]

function getJsonLd({ siteNavigationElements, basePath }){
  return {
    '@context' : 'https://schema.org',
    '@type'    : 'WPHeader',
    '@id'      : `${HOST}${basePath}/#pageHeader`,
    cssSelector: '#pageHeader',
    xpath      : '//*[@id="pageHeader"]',
    hasPart    : siteNavigationElements,
    potentialAction
  }
}

</script>