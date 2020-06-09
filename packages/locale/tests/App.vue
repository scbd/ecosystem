<template>
  <div id="app">
    <h1>Locale service functions: <span id="functions">{{Object.keys(locale).length}}</span></h1>
  <div v-for=" (name,index) in Object.keys(locale)" :key="index">
    <h3>{{name}}</h3>
    <span v-if="isFunction(locale[name])" :id="name" >{{ locale[name]() }}</span>
    <span v-if="!isFunction(locale[name])" :id="name" >{{ Array.from(locale[name]) }}</span>
  </div>
  </div>
</template>

<script>

import * as locale from '../src/index.js'
export default {
  name: 'App',
  computed: { locale:() => locale },
  methods:{isFunction}
}

function isFunction(object){
  return typeof object === 'function'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
