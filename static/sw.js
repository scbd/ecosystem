importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ecosystem",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/157115fc845585f05dcd.js",
    "revision": "9677526aabc7ac7fd835a9367a91b9ae"
  },
  {
    "url": "/_nuxt/3e4d5f1f074243d36249.css",
    "revision": "0fde4302e6869d4d113dbcb6c4b07f01"
  },
  {
    "url": "/_nuxt/44ceac5b63d826541bae.css",
    "revision": "36453ef26e9b7a9a15a35e4eba90eb54"
  },
  {
    "url": "/_nuxt/674d575de012770f2e2a.js",
    "revision": "6740682d92beb5b632bc1882f8500677"
  },
  {
    "url": "/_nuxt/7272c3333e9dcdb58069.js",
    "revision": "26d20098fc7138ec4501b70395788f04"
  },
  {
    "url": "/_nuxt/756853d2b2f31f3a0062.css",
    "revision": "cabb2bac1993ca199fb225558b92a797"
  },
  {
    "url": "/_nuxt/79810cfb4a3b190e944d.css",
    "revision": "7f3e50cdce24ae4b970738773fe21efc"
  },
  {
    "url": "/_nuxt/8d5af4bad0150223b97f.js",
    "revision": "9f8fc9e471d744e15dd33ced3ea5eb69"
  },
  {
    "url": "/_nuxt/987930217c5f94ba9562.js",
    "revision": "765365fcd5a71033b6aca2591e3c388a"
  },
  {
    "url": "/_nuxt/9bbcfcf7cd70d37ff4df.js",
    "revision": "4d65a99c96fe56953cf7429e790eb008"
  },
  {
    "url": "/_nuxt/c20d70b96195e4a5e0ac.css",
    "revision": "9790f0f4898bd59c35e23993c56b2846"
  },
  {
    "url": "/_nuxt/d01bc517d0237ad3dba7.js",
    "revision": "cddcaedaadd7674792a0dde1eed202ce"
  },
  {
    "url": "/_nuxt/d2a7cb11d00af2d7b3f2.js",
    "revision": "3889ed036b967ba7105b88266efb9299"
  },
  {
    "url": "/_nuxt/dc90fb2f633c710ed754.css",
    "revision": "c0e1cb9c2d78537708d9216c67877a75"
  },
  {
    "url": "/_nuxt/de6091635ecbf20ab0ef.js",
    "revision": "5b5a1a8a3eb9de6ca59792af26b514b6"
  },
  {
    "url": "/_nuxt/df25140fd906271d4455.js",
    "revision": "76993355b9dee7bb2854cfe24663e9f8"
  },
  {
    "url": "/_nuxt/df37bc98d2e74b76fe5e.js",
    "revision": "ac3c65d964c080b57d372ae445a85422"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

