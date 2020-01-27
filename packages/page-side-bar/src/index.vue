<template>
  <aside id="pageSideBar" class="left-article-menu-container ">
    <div class="block block-cbd-article block-navigation-block">
      <div class="content">
        <nav id="ctl24_sidebar" class="sidebar-menu navbar-collapse" role="navigation">
          {{menu}}
          <ul class="list-unstyled">
            <li  v-for="(aMenu,index) in menu.hasPart" :key="index"  class="level-0" >
              <nuxt-link :to="aMenu.url">{{aMenu.name}}</nuxt-link>
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
    name: 'PageSideBar',
    props:{
      siteNavigationElement: { type: Object },
      options: { type: Object },
      menuIdentifier: { type: String },     
    },
    methods: { readMenusFromApi, getSideMenu },
    computed:{opts, sNEs},
    data,
    mounted
  }

function data(){
  const menu = {}
  
  return {menu}
}

function opts(){
  return defaultOpts.get(this.options)
}

function sNEs(){
  return this.siteNavigationElement || this.menu
}

async function mounted(){
  await this.readMenusFromApi()
}

async function readMenusFromApi(){
  const checkIe  = (await import(/* webpackChunkName: "check-ie" */ 'check-ie')).default

  if(checkIe(window.navigator.userAgent))
    await import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch')

  this.menu = (await this.getSideMenu(this.opts))[0]
  this.$forceUpdate()
}


async function getSideMenu({ dapi }, searchMenu){
  const $http = this.$http? this.$http : (await import(/* webpackChunkName: "ky-universal" */ 'ky-universal')).default

  searchMenu = searchMenu? searchMenu : this.menuIdentifier

  return $http.get(`${dapi}/menus/${searchMenu}?postfix=WPSB`).json()
}

</script>
<style scoped>
.left-article-menu-container {
	-webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 24%;
	padding-top: 105px;
	background: #265a4f;
}

.sidebar-menu {
  color: white;
  margin-left: 30px;
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
@media (max-width:991px) {
	.left-article-menu-container {
		display: block;
  }
}
</style>