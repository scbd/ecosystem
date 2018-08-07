<template>
  <section>
      <div class="cont">
        <div class="day-col" v-for="(day,index) in getDays()" v-bind:key="index" :ref="index">
          <div class="day-col-day">{{day.day}}</div>
          <div class="day-col-day-w">{{day.dayOfWeek}}</div>
        </div>
      </div>
      <div class="cont off" v-for="(s,i) in streams" v-bind:key="i"> &nbsp;
       <div class="day-col" :class="{'on':index%2}"  v-for="(day, key, index) in getDays()" v-bind:key="index" :ref="'d'+key">
          <div class="event-cont"   v-if="isEventStart(day, e,s)" v-for="(e,j) in events" v-bind:key="j" >
            <div class="event"   :style="{'background-color':e.color,width:`${getColWidth(e)}px`}" v-on:click="showDetails" >
              &nbsp;{{e.title}}
            </div>
            &nbsp;
          </div>
          <div class="event-cont" v-else-if="isEventOn(day, e,s)">&nbsp;</div>
       </div>
      </div>
  </section>

</template>

<script>
import {DateTime} from 'luxon'
import Bus        from '../modules/Bus'
import events     from  '../event-data.js'
export default {
  name: 'ConferenceCal',

  data:function(){
    return{
      local:'en',
      days:{},
      start:DateTime.fromISO('2018-11-11T05:00:00.000Z'),
      end:DateTime.fromISO('2018-11-30T11:59:00.000Z'),
      streams:['official','purpel','rio','cepa','side-events','inno'],
      events:[]
  }},
  methods:{
    getDays:getDays,
    isEventStart:isEventStart,
    isEventOn:isEventOn,
    getColWidth:getColWidth,
    showDetails:showDetails
  },
  mounted:function(){
    for (var i = 0; i < events.length; i++) {
      events[i].length = (events[i].end.diff(events[i].start,'days' ).toObject().days || 0)+1
    }
    this.events=events;
    Bus.$on('EventDetails', this.showDetails)
  }
}

function showDetails (e){
  let {data} = e
  this.detailsData = this.detailsData? false : data
}

function getColWidth(event){
  // // eslint-disable-next-line
  // console.log('event.length',event.title)
  // // eslint-disable-next-line
  // console.log('event.length',event.length)
  return this.$refs['d'+event.start.toFormat("yyyyMMdd")][0].clientWidth * event.length
}
function isEventStart(day, event,stream){
  // this.getColWidth('d'+day.date.toFormat("yyyyMMdd"))
  if(day.date.day===event.start.day && event.stream===stream)
    return true
  else
    return false
}
function isEventOn(day, event,stream){
  // this.getColWidth('d'+day.date.toFormat("yyyyMMdd"))
  // console.log("day.date.day>=event.start.day",(day.date.day>=event.start.day))
  // console.log("dday.date.day<event.end.day",(day.date.day<event.end.day))
  //   console.log("event.stream===stream",(event.stream===stream))
  //   console.log("=========================")
  if(day.date.day>event.start.day && day.date.day<=event.end.day && event.stream===stream)
    return true
  else
    return false
}
function getDays(){
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
  width:400%;
}
.debugB {
  border: 1px solid blue;
}
.debug {
  border: 1px solid red;

}
.off{
  margin-left:-0.3em
}


   /* Small Devices, Tablets */
   @media only screen and (min-width : 768px) {
     .cont{
       width:100%;
     }
   }
   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
     .cont{
       width:100%;
     }
   }
   /* Large Devices, Wide Screens */
   @media only screen and (min-width : 1200px) {
     .cont{
       width:100%;
     }
   }

</style>
