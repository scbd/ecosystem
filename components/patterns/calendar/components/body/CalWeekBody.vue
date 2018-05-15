<template>
  <div :class="[$style.main]">
    <CalWeekRow
      v-for="(d, index) in week.dayIterarions"
      v-bind:key="index"
      :day="d"
      :events="events()"
    />
    <div ref="prev" :class="[$style.prev]" v-if="week.prev">
      <CalWeekRow  v-if="week.prev"
        v-for="(d, index) in week.prev.dayIterarions"
        v-bind:key="index"
        :day="d"
        :events="events()"
      />
    </div>

    <div ref="next" :class="[$style.next]" v-if="week.next">
      <CalWeekRow  v-if="week.next"
        v-for="(d, index) in week.next.dayIterarions"
        v-bind:key="index"
        :day="d"
        :events="events()"
      />
    </div>
    <div ref="prevPrev" :class="[$style.prevPrev]" v-if="week.prev.prev">
      <CalWeekRow  v-if="week.prev.prev"
        v-for="(d, index) in week.prev.prev.dayIterarions"
        v-bind:key="index"
        :day="d"
        :events="events()"
      />
    </div>

    <div ref="nextNext" :class="[$style.nextNext]" v-if="week.next.next">
      <CalWeekRow  v-if="week.next.next"
        v-for="(d, index) in week.next.next.dayIterarions"
        v-bind:key="index"
        :day="d"
        :events="events()"
      />
    </div>
  </div>
</template>

<script>
  import CalWeekRow from './CalWeekRow'

  export default {
    name: 'CalWeekBody',
    components:{CalWeekRow},
    props:['week'],
    methods:{
      events:function(){
      let result =[]
      let arr = [{title:'event 1'},
      {title:'event 2'},
      {title:'event 3'},
      {title:'event 4'},
      {title:'event 5'},
      {title:'event 6'},
      {title:'event 7'},
      {title:'event 8'},
      {title:'event 9'},
      {title:'event 10'},
      {title:'event 11'},
      {title:'event 12'},
      {title:'event 13'},
      {title:'event 14'},
      {title:'event 15'},
      {title:'event 16'}].map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])

      for (var i = 0; i < Math.floor(Math.random()*arr.length); i++)
        result[i]=arr[i]
      return result
      }}
  }

</script>

<style module>
  .main{
    position: relative;
    height:100%;
  }
  .prev{
    position: absolute;
    top:0;
    height:100%;
    width:100%;
    transform: translateX(-100%);
    display:none;
  }

  .next{
    position: absolute;
    top:0;
    height:100%;
    width:100%;
    transform: translateX(100%);
    display:none;
  }
  .prevPrev{
    position: absolute;
    top:0;
    height:100%;
    width:100%;
    transform: translateX(-200%);
    display:none;
  }
  .nextNext{
    position: absolute;
    top:0;
    height:100%;
    width:100%;
    transform: translateX(200%);
    display:none;
  }
</style>
