<template>
  <div id="auth">
    Iframe Installed <br>
    user:<pre>{{this.$me | json}}</pre>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAuthentication  from '~/components/src/Authentication'
console.log(process.env.NODE_ENV)
  Vue.use(VueAuthentication,{env:process.env.NODE_ENV})
export default {
  name: 'auth',
 filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  }
}
</script>
