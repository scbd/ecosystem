<template>
  <section>
    <div>
      <!-- <EventSeries v-if="detailsData"/> -->
      <div class="cont">
        <div class="day-col" v-for="(day,index) in getDays" v-bind:key="index" :ref="index">
          <div class="day-col-day">{{day.day}}</div>
          <div class="day-col-day-w">{{day.dayOfWeek}}</div>
        </div>
      </div>
      <div class="cont off" v-for="(s,i) in streams" v-bind:key="i"> &nbsp;
       <div class="day-col" :class="{'on':index%2}"  v-for="(day, key, index) in days" v-bind:key="index" :ref="'d'+key">
          <div class="event-cont"   v-if="isSeriesStart(day, aSeries,s)" v-for="(aSeries,j) in series" v-bind:key="j" >
            <div class="event"   :style="{'background-color':aSeries.color,width:`${getColWidth(aSeries)}px`}"  v-on:click="showDetails(aSeries,$event)">
            &nbsp;{{aSeries.title}}
            </div>
            &nbsp;
          </div>
          <div class="event-cont" v-else-if="isSeriesOn(day, aSeries,s)">&nbsp;</div>
       </div>
      </div>
      <pre>{{this.series}}</pre>
    </div>
  </section>
</template>

<script>
import {DateTime} from 'luxon'
// import EventSeries      from './EventSeries.vue'
// import Bus        from '../modules/Bus'
import EventsApi  from '../modules/EventsApi.js'

export default {
  name: 'ConferenceCal',
  props:['conferenceCode'],
  // components:{EventSeries},
  data:function(){

    return{
      local:'en',
      days:{},
      conference:'',
      streams:EventsApi.getStreams(),
      detailsData:false,
      series:[]
  }},
  methods:{
    isSeriesStart:isSeriesStart,
    isSeriesOn:isSeriesOn,
    getColWidth:getColWidth,
    showDetails:showDetails,
    getSeries:getSeries,

  },
  computed:{
    getDays:getDays,
    computeSeries:computeSeries
  },
  mounted:async function(){
    this.conference = await EventsApi.getConference(this.conferenceCode)
    this.series     = await this.getSeries()
  }
}
function computeSeries(){

  return this.series
}
async function getSeries(){

  let series =  await EventsApi.getSeries(this.conferenceCode)
  console.log('this.series',series)
  return series
}
function showDetails (event){

  this.detailsData = event
}

function getColWidth(event){
  return this.$refs['d'+event.start.toFormat("yyyyMMdd")][0].clientWidth * event.length
}
function isSeriesStart(day, event,stream){

  if(day.date.day===event.start.day && event.stream===stream)
    return true
  else
    return false
}
function isSeriesOn(day, event,stream){
  if(day.date.day>event.start.day && day.date.day<=event.end.day && event.stream===stream)
    return true
  else
    return false
}
function getDays(){

  if(!this.conference) return {}
  if(Object.keys(this.days).length) return this.days

  let start = DateTime.fromISO(this.conference.schedule.startMain || this.conference.StartDate,{zone:this.conference.timezone})
  let end   = DateTime.fromISO(this.conference.EndDate,{zone:this.conference.timezone})
  let diff  = end.diff(start,'days' ).toObject().days

  for (var i = 0; i < diff; i++) {
    let day = start.plus({days:i}).startOf('day')
    this.days['d'+day.toFormat("yyyyMMdd")] ={
      day:day.day,
      dayOfWeek:day.setLocale(this.locale).toFormat('ccc'),
      date:day
    }
  }
  return this.days
}
</script>

<style scoped>
.stream{

  padding: 1em 0 1em 0;
}
.event{
  position: absolute;
  color:white;
  font-weight: bold;
  /* padding: .5em .5em .5em .5em; */
  font-size: 1.2em;
  text-align: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  cursor:pointer;
  z-index:500;

}
.event-cont{
  width: 100%;
  font-weight: bold;
  padding: .5em 0 1em 0;
  font-size: 1.2em;
  z-index:100;
  cursor:pointer;
}
.day-col{

  /* display: flex;
  flex-direction: column; */
  /* flex-grow:1; */
  /* width: 25em; */
  width:100%;
  position: relative;

}
.day-col-day{
  background: #95A5A6;
  color:white;
  text-align: center;
  font-weight: bold;
  border-right: 1px solid white;
}
 .on{
  background: #F2F1EF;
}
.day-col-day-w{
  background: #D2D7D3;
  text-align: center;
  border-right: 1px solid white;

}
.cont{
  display: inline-flex;
  width:700%;
}
.debugB {
  border: 1px solid blue;
}
.debug {
  border: 1px solid red;
  z-index:600;

}
.off{
  margin-left:-0.3em
}

@media  (min-width:768px) {
 .cont{
   width:200%;
 }
}
@media (min-width:992px) {
 .cont{
   width:100%;
 }
}


</style>
