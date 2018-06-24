<template>
  <div id="app">
    <AddToCalendar :event="calEvent" style="display:inline-block;" v-on:click.stop=""/>
  </div>
</template>

<script>
  import AddToCalendar      from './components/'
  import calEvent           from './mock-event.json'
  import '@scbd/ecosystem-icons/all/all.css'

  export default {
    name: 'app',
    data:function(){
      return{
        calEvent:calEvent
    }},
    components: {
      AddToCalendar
    }
  }

</script>
