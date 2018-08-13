<template>
  <section >
  <p>  test</p>
      <!-- <component v-bind:is="componentName"></component> -->
  </section>
</template>

<script>
import Vue from 'vue'
import toPascalCase from 'to-pascal-case'
import Calendar from '@scbd/eco-molecule-cal'
export default {
  name:'widget',
  validate({ params }) {
    let widgets =['calendar','add-to-calendar']
    return widgets.includes(params.widget)
  },
  async asyncData({ params, error }) {
    try {
      let data = {componentName:toPascalCase(params.widget)}
       // let component = await import('@biodiversity/eco-molecule-calendar-vue')
        Vue.component(data.componentName, Calendar)
       console.log(data)
       return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}

</script>
