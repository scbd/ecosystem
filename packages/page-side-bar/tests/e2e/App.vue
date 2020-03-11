<template>
  <div id="app">
    <PageSideBar :site-navigation-element="menus" :options="{isNuxt: false}"/>
  </div>
</template>

<script>
import PageSideBar from '../../src/index'
import $http from 'ky-universal'

export default {
  name: 'app',
  components: { PageSideBar },
  mounted,
  data

}

function data(){ return { menus: {} }}

async function mounted(){
  this.menus = await getSneFromApi()
  console.log(this.menus)
}

function getSneFromApi ( postFix='some-post-fix'){
  return $http.get(`https://h550gxekak.execute-api.us-east-1.amazonaws.com/stg/menus/portals?postfix=${postFix}`)
    .then(res => res.json())
    .then(res => res[0] || {})
}

</script>

<style>
  @import "https://fonts.googleapis.com/css?family=BenchNine:300,400,600,900";
  @import "https://cdn.cbd.int/@scbd/www-css@0.0.18/dist/style.min.css";
</style>
