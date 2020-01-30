<template>
  <aside id="pageSideBar" class="desktop-only left-article-menu-container">
    <div class="block block-cbd-article block-navigation-block">
      <div class="content" >
        <nav id="sideBarNav" class="sidebar-menu navbar-collapse" role="navigation">
          <p>{{ menu.name }}</p>
          <ul class="list-unstyled">
            <li  :class="{ selected: isSelected(aMenu.url) }" v-for="(aMenu,index) in menu.hasPart" :key="index"  class="level-0 no-levels" >
              <nuxt-link v-if="opts.isNuxt" :to="aMenu.url | filterBase(baseUrl)">{{aMenu.name}}</nuxt-link>
              <a  v-if="!opts.isNuxt" :href="aMenu.url">{{aMenu.name}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
<script>
import defaultOpts  from './modules/defaultOptions'

export default {
  name : 'PageSideBar',
  props: {
    siteNavigationElement: { type: Object },
    options              : { type: Object },
    menuIdentifier       : { type: String }
  },
  methods : { readMenusFromApi, getSideMenu, isSelected },
  computed: { opts, sNEs, baseUrl },
  filters : { filterBase },
  data,
  mounted
}

function isSelected(url){
  const testUrl = ((url === '/portals/capacity-building')? url+'/' : url)

  return testUrl === this.baseUrl+this.$route.path
}

function filterBase(url, baseUrl){
  let filterdUrl = url.replace(baseUrl, '')

  if(!filterdUrl) filterdUrl = '/'

  return filterdUrl
}

function baseUrl(){
  return this.opts.baseUrl
}

function data(){
  const menu = {}
  
  return { menu }
}

function opts(){
  return defaultOpts.get(this.options)
}

function sNEs(){
  return this.siteNavigationElement || this.menu
}

async function mounted(){
  // console.log('isSelected', this.isSelected('/portals/capacity-building/'))
  await this.readMenusFromApi()
}

async function readMenusFromApi(){
  this.menu = (await this.getSideMenu(this.opts))[0]
  this.$forceUpdate()
}


async function getSideMenu({ dapi }, searchMenu){
  searchMenu = searchMenu? searchMenu : this.menuIdentifier

  const data = await this.$http.get(`${dapi}/menus/${searchMenu}?postfix=WPSB`).then(res => res.json())

  console.log(data)
  return data
}

</script>
<style scoped>
.left-article-menu-container {
	-webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 24%;
  padding-top: 1em;
	/* padding-top: 175px; */
	background: #265a4f;
  position: relative;
  
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
   nav[id$=sideBarNav] ul li.no-levels {
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