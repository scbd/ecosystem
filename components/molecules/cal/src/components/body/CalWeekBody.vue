<template>
  <div :class="[$style.main]">

    <CalWeekRow
      v-for="(d, index) in week.dayIterarions"
      v-bind:key="index"
      :y-index="index"
      :day="d"
      :day-events="getDayEvents(d)"
    />
  </div>
</template>

<script>
  import CalWeekRow from './CalWeekRow'

  export default {
    name: 'CalWeekBody',
    components:{CalWeekRow},
    props:['week','eventsByWeek'],
    computed:{
      events:getEvents
    },
    methods:{
      getDayEvents:getDayEvents,
    }
  }

  function getDayEvents(d){
    if(!this.eventsByWeek) return[]
    return this.eventsByWeek[d.aDateTime.toFormat('yyyy-MM-dd')]
  }
  function getEvents(){
    return this.eventsByWeek
  }
</script>

<style module>
  .main{
    position: relative;
    height:100%;
  }
</style>
