<template>
  <aside :id="getHash(siteNavigationElement.url).replace('-SNE', '')" class="desktop-only left-article-menu-container">
    <JsonLd :site-nav-elm="siteNavigationElement"/>

    <div class="block block-cbd-article block-navigation-block">
      <div class="content" >
        <nav :id="getHash(siteNavigationElement.url)" class="sidebar-menu navbar-collapse" role="navigation">

          <p>{{ siteNavigationElement.name }}
          <svg class="stylish" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
            <title>pencil</title>
            <path d="M5.672 24l1.422-1.422-3.672-3.672-1.422 1.422v1.672h2v2h1.672zM13.844 9.5c0-0.203-0.141-0.344-0.344-0.344-0.094 0-0.187 0.031-0.266 0.109l-8.469 8.469c-0.078 0.078-0.109 0.172-0.109 0.266 0 0.203 0.141 0.344 0.344 0.344 0.094 0 0.187-0.031 0.266-0.109l8.469-8.469c0.078-0.078 0.109-0.172 0.109-0.266zM13 6.5l6.5 6.5-13 13h-6.5v-6.5zM23.672 8c0 0.531-0.219 1.047-0.578 1.406l-2.594 2.594-6.5-6.5 2.594-2.578c0.359-0.375 0.875-0.594 1.406-0.594s1.047 0.219 1.422 0.594l3.672 3.656c0.359 0.375 0.578 0.891 0.578 1.422z"></path>
          </svg>
          </p>
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

function filterBase(urlString, base){ 
  if(!urlString) return '/'

  return (new URL(urlString)).pathname.replace(base, '') || '/'
}

function opts(){ return defaultOpts.get(this.options) }

function base(){ return this.opts.base }

function getHash(urlWithHash){ 
  if(!urlWithHash) return ''
  return (new URL(urlWithHash)).hash.replace('#', '')
}
</script>

<style scoped>
.stylish{
  display:inline-block;
  width:26px;
  height:26px;
  border-radius:26px;
  border:4px double #ccc;
  color:#666;
  line-height:35px;
  text-align:center;
  text-decoration:none;
  text-shadow:0 1px 0 #fff;
  background:#ddd}
.stylish:hover{border:4px double #bbb;color:#aaa;text-decoration:none;background:#e6e6e6}
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