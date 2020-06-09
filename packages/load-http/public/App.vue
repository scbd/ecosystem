<template>
  <div id="app">
    <h1 id="key-length">{{length}}</h1>
  </div>
</template>

<script>
import   consola    from 'consola'
import { get$http } from '../src/index'

export default {
  name    : 'App',
  computed: { length },
  created,
  data
}
function data(){
  return { action: {} }
}
function length(){
  return Object.keys(this.action).length
}
async function created(){
  const $http   = await get$http()
  const action = await $http.get('https://api.cbd.int/api/v2019/actions/5cda8a5f3e27a60001320d27').then((res) => res.json())

  this.action = action
  consola.info(action)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
