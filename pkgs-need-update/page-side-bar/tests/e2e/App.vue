<template>
  <div id="app">
    <PageSideBar :site-navigation-element="menus" :options="this.pageSideBarOptions"/>
  </div>
</template>

<script>
import PageSideBar from '../../src/index'
import $http from 'ky-universal'

export default {
  name: 'app',
  components: { PageSideBar },
  computed  : { pageSideBarOptions },
  mounted,
  data

}

function data(){ return { menus: {}, canEdit: false }}

function pageSideBarOptions(){
  const params = { _country: 'ca' }
  const routeParamFunctions = { _country }

  return { base:'/portals/capacity-building', isNuxt: false, menuIdentifier:'portals', canEdit: this.canEdit, params, routeParamFunctions }
}

function _country(id){
  return 'Canada'
}

async function mounted(){
  this.menus = await getSneFromApi()

  setTimeout(() => this.canEdit = true, 2000)
  setTimeout(() => this.canEdit = false, 4000)
  setTimeout(() => this.canEdit = true, 6000)
}

function getSneFromApi ( postFix='some-post-fix'){
  return $http.get(`http://localhost:4000/local/menus/portals?postfix=${postFix}`)
    .then(res => res.json())
    .then(res => res[0] || {})
}

</script>

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://cdn.cbd.int/@scbd/www-css@0.0.18/dist/style.min.css";
</style>
