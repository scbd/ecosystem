<template>
  <aside :id="getHash(siteNavigationElement.url).replace('-SNE', '')" class="desktop-only left-article-menu-container">
    <JsonLd :site-nav-elm="siteNavigationElement"/>
    <div class="block block-cbd-article block-navigation-block">
      <div class="content" >
        <nav :id="getHash(siteNavigationElement.url)" class="sidebar-menu navbar-collapse" role="navigation">
          <p>{{ siteNavigationElement.name }}</p>
          <ul class="list-unstyled">
            <li  :class="{ selected: isSelected(aMenu.url) }" v-for="(aMenu,index) in siteNavigationElement.hasPart" :key="index"  class="level-0 no-levels" >
              <nuxt-link v-if="opts.isNuxt" :to="aMenu.url | filterBase(base)">{{aMenu.name}}</nuxt-link>
              <a  v-if="!opts.isNuxt" :href="aMenu.url | filterBase(base)">{{aMenu.name}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
<script>
import defaultOpts  from './modules/defaultOptions'
import JsonLd       from './WPSideBarJsonLd'

export default {
  name      : 'WebPageSideBar',
  components: { JsonLd },
  props     : {
    siteNavigationElement: { type: Object },
    options              : { type: Object }
  },
  methods : { isSelected, getHash, getRoutePath },
  computed: { opts, base },
  filters : { filterBase }
}

function isSelected(urlString){
  const { pathname } = (new URL(urlString))

  return pathname === this.getRoutePath()
}

function getRoutePath(){
  if(this.opts.isNuxt) return trimTrailingSlash(this.base+this.$route.path)
  if(!this.$isServer) return trimTrailingSlash(window.location.pathname)
}

function trimTrailingSlash(urlString){
  if(urlString.endsWith('/')) return urlString.slice(0, -1)
  return urlString
}

function filterBase(urlString, base){ return (new URL(urlString)).pathname.replace(base, '') || '/' }

function opts(){ return defaultOpts.get(this.options) }

function base(){ return this.opts.base }

function getHash(urlWithHash){ return (new URL(urlWithHash)).hash.replace('#', '') }
</script>

<style scoped>
#WPSideBar{
  min-height: 100vh;
  -webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 20%;
}
.left-article-menu-container {
	-webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 20%;
  padding-top: 1em;
	background: #265a4f;
  position: relative;
  min-height: 100vh;
}

.sidebar-menu {
  color: white;
  margin-left: 30px;
  padding-right: 30px;
  font-weight: 400;
  width: 100%;
  position: absolute;
  z-index: 1;
}
.sidebar-menu ul.active {
  overflow: hidden;
  padding-left: 10px;
}
.sidebar-menu > ul > li {
  padding-left: 10px;
}
.sidebar-menu .level-0 > a {
  color: white;
  text-transform: uppercase;
}
.sidebar-menu .level-1 > a {
  color: white;
}
.sidebar-menu .level-2 > a {
  color: white;
  margin-left: 20px;
}
.sidebar-menu li.active.level-0 {
  background: #137b4b;
  padding: 10px 30px;
  margin-right: 20px;
  margin-left: -20px;
}
.sidebar-menu li.active > ul.active {
  background: #009b48;
  margin-right: -50px;
  margin-left: -15px;
  padding-left: 15px;
}
.sidebar-menu li.selected > a {
  color: #265a4f;
  display: inline-block;
  width: 100%;
  background-color: white;
}
.sidebar-menu li:not(.level-0) a::before {
  content: "\00a0 >\00a0";
}
nav[id$=-WPSB-SNE] ul li.no-levels {
    background: #009B48;
}

nav.sidebar-menu > ul > li.selected {
  background: white;
}
@media (max-width:991px) {
	.left-article-menu-container {
		display: block;
  }
}
</style>