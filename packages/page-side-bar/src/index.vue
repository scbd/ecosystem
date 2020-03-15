<template>
  <aside :id="getHash(siteNavigationElement.url).replace('-SNE', '')" class="desktop-only left-article-menu-container">
    <JsonLd :site-nav-elm="siteNavigationElement"/>

    <div class="block block-cbd-article block-navigation-block">
      <div class="content" >
        <nav :id="getHash(siteNavigationElement.url)" class="sidebar-menu navbar-collapse" role="navigation">

          <p style="display:inline-block;margin-right:5px;">{{ siteNavigationElement.name }}  </p>
          <form  v-if="menuIdentifier && canEdit" :action="`https://www.cbd.int/admin/structure/menu/manage/${menuIdentifier}`" method="get" target="_blank" style="display:inline-block;">
            <button ></button>
          </form>
          <ul class="list-unstyled">
            <li  :class="{ selected: isSelected(aMenu.url), active: isActive(aMenu) }" v-for="(aMenu,index) in siteNavigationElement.hasPart" :key="index"  class="level-0" >
              <nuxt-link v-if="opts.isNuxt" :to="aMenu.url | filterBase(opts)">{{aMenu.name}}</nuxt-link>
              <a  v-if="!opts.isNuxt" :href="aMenu.url | filterBase(opts)">{{aMenu.name}}</a>
              <ul  v-if="isActive(aMenu)" class="sub-menu-items list-unstyled level-1 collapse show active " >
                <li :class="{ selected: isSelected(aSubMenu.url)}" class="level-1" v-for="(aSubMenu,i) in aMenu.hasPart" :key="i" ><a :href="aSubMenu.url | filterBase(opts)">{{aSubMenu.name}}</a></li>
              </ul>
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
  methods : { isSelected, getHash, getRoutePath, isActive },
  computed: { opts, base, menuIdentifier, canEdit },
  filters : { filterBase }
}

function isSelected(urlString){
  if(!urlString) return false
  const { pathname } = (new URL(urlString))

// console.log('selected',selected)
// console.log('active',selected)
console.log('base', pathname )

  return pathname === this.getRoutePath()
}

function isActive(aMenu){
  const isBase = this.getRoutePath() === this.base
  const { pathname } = aMenu.url? (new URL((aMenu.url))) : {}
  const active   = aMenu.hasPart && aMenu.hasPart.length
  const selected = isBase? false : this.getRoutePath().includes(pathname)


  return active && selected
}

function getRoutePath(){
  if(this.opts.isNuxt) return trimTrailingSlash(this.base+this.$route.path)
  if(!this.$isServer) return trimTrailingSlash(window.location.pathname)
}

function trimTrailingSlash(urlString){
  if(urlString.endsWith('/')) return urlString.slice(0, -1)
  return urlString
}

function filterBase(urlString, { base, isNuxt}){
  if(!urlString) return '/'

  const { pathname } =  new URL(urlString)

  return isNuxt? (new URL(urlString)).pathname.replace(base, '') || '/' : pathname
}

function opts(){ return defaultOpts.get(this.options) }

function base(){ return this.opts.base }
function menuIdentifier(){ return this.opts.menuIdentifier }
function canEdit(){ return this.opts.canEdit }
function getHash(urlWithHash){
  if(!urlWithHash) return ''
  return (new URL(urlWithHash)).hash.replace('#', '')
}
</script>

<style scoped>
form {display:inline-block}
button{
  display:inline-block;
  width:26px;
  height:26px;
  border-radius:26px;
margin: 0;
  color:#fff;

border: 1px solid #ccc;
  text-decoration:none;

  background:#fff;
    background-image: url(https://www.cbd.int/core/misc/icons/bebebe/pencil.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
    cursor: pointer;
  }
button:hover{
  background-image: url(https://www.cbd.int/core/misc/icons/787878/pencil.svg);
}
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