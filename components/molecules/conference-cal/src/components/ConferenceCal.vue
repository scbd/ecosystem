<template>
  <section>
    <div class="scroll" getEvents>
      <div class="cont">
        <div class="day-col" v-for="(day,index) in getDays" v-bind:key="index" :ref="index">
          <div class="day-col-day">{{day.day}}</div>
          <div class="day-col-day-w">{{day.dayOfWeek}}</div>
        </div>
      </div>
      <div class="cont off" v-for="(s,i) in streams" v-bind:key="i"> &nbsp;
         <div class="day-col" :class="{'on':index%2}"  v-for="(day, key, index) in getDays" v-bind:key="index" :ref="'d'+key">
            <div class="event-cont"   :class="{pointer:ifLink(e)}" v-if="isEventStart(day, e,s)" v-for="(e,j) in getEvents" v-bind:key="j" v-on:click="showDetails(e)">
                <div class="event"  :style="{'background-color':e.color,width:`${getColWidth(e)}px`}"  >
                  <span >{{ e.titleMobile || e.title }}</span>
                </div>
            </div>
            <div class="event-cont" v-else-if="isEventOn(day, e,s)">&nbsp;</div>
         </div>
      </div>
    </div>
  </section>
</template>

<script>
import {DateTime} from 'luxon'
import axios from 'axios'
import Vue from 'vue'
export default {
  name: 'ConferenceCal',
  props:['code'],
  data:function(){

    this.getConference()
    return{
      local:'en',
      days:{},
      start:'',
      end:'',
      streams:[],
      events:[]
  }},
  methods:{

    isEventStart:isEventStart,
    isEventOn:isEventOn,

    showDetails:showDetails,
    getConference:getConference,
    loadEvents:loadEvents,
    ifLink:ifLink
  },
  computed:{
    getDays:getDays,
    getEvents:getEvents,
        getColWidth:getColWidth
  },
  mounted:function(){
    this.$watch('events', () =>  this.$forceUpdate())
  }
}
function ifLink(event){
  if(event.url) return event.url
  if(event.code) `https://www.cbd.int/conferences/${this.codde}/parallel-meetings/${event.code}`
  return false
}

function getEvents(){

  if(this.events && this.events.length)
  return this.events
  return []

}
function loadEvents(events){

  if(!events) return
  for (let i = 0; i < events.length; i++){
    events[i].end=DateTime.fromISO(events[i].end)
    events[i].start=DateTime.fromISO(events[i].start)
    events[i].length = (events[i].end.diff(events[i].start,'days' ).toObject().days || 0)+1
  }
  Vue.set(this,'events',events)


}

async function getConference(){
  let path = `/api/v2016/event-groups/`

  let r = await axios.get(path,{params:{q:{code:'2018'}}})

    if(!r.data[0].conference ) return

    this.conference = r.data[0].conference.overViewCalendar
    this.start = DateTime.fromISO(this.conference.start)
    this.end = DateTime.fromISO(this.conference.end)
    this.streams = this.conference.streams

    this.events = r.data[0].conference.overViewCalendar.events
    this.loadEvents(this.events)
    return this.events
}

function showDetails (e){
  if(this.ifLink(e))
    window.open(this.ifLink(e), '_blank');
}

function getColWidth(){
  return event => {
  if(!this.$refs['d'+event.start.toFormat("yyyyMMdd")]) return
  return this.$refs['d'+event.start.toFormat("yyyyMMdd")][0].clientWidth * event.length
}
}
function isEventStart(day, event,stream){
  if(day.date.day===event.start.day && event.stream===stream)
    return true
  else
    return false
}
function isEventOn(day, event,stream){
  if(day.date.day>event.start.day && day.date.day<=event.end.day && event.stream===stream)
    return true
  else
    return false
}
function getDays(){
  if(!this.start) return
  let diff = this.end.diff(this.start,'days' ).toObject().days

  for (var i = 0; i < diff; i++) {
    let day = this.start.plus({days:i}).startOf('day')
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
.pointer{
  cursor:pointer;
}
.stream{

  padding: 1em 0 1em 0;
}
.event{
  position: absolute;
  color:white;

  /* padding: .5em .5em .5em .5em; */
  font-size: .6em;
  text-align: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  max-height:60px;
  overflow-y: scroll;
}

.event-cont{
  position: relative;

  width: 100%;
  font-weight: bold;
  padding: .5em 0 1em 0;
  font-size: 1.2em;
  z-index:100;
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
  width:200%;
}
.debugB {
  border: 1px solid blue;
  width:100%;
  overflow-x: scroll;
}
.scroll {
  width:100%;
  overflow-x: scroll;
}
.debug {
  border: 1px solid red;

}
.off{
  margin-left:-0.3em
}


   @media  (min-width:768px) {
     .cont{
       width:150%;
     }
   }
   @media (min-width:992px) {
     .cont{
       width:100%;
     }
   }


</style>
