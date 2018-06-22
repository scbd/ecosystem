<template>
  <section >
    <AddToCal :options="{queryFn:getEvents,conference:conference}"/>
  </section>
</template>

<script>
import Vue from 'vue'
import VueAuthentication  from '~/components/src/Authentication'
import {DateTime}            from 'luxon'
import axios from 'axios'
import AddToCal from '~/components/molecules/Calendar/src/components/Calendar.vue'

Vue.use(VueAuthentication,{env:process.env.NODE_ENV})
export default {
  name:'index',
  data:function (){
    let conference
    this.getConference().then((r)=>{conference=r.data})
    return {
      conference: conference
    }
  },
  components:{AddToCal},
  methods:{
    getEvents:getEvents,
    genQuery:genQuery,
    getConference:getConference
  }
}

//
  function genQuery(query){
    let q = 'schema_s:reservation'

    if(query.conference){
      q += `+AND+conference_s:${query.conference}`
      if(!query.start){
        q += `+AND+(start_s:[ ${this.conference.StartDate} TO *])`
      }
      if(!query.end){
        q += `+AND+(end_s:[ * TO ${this.conference.EndDate}])`
      }
    }

    if(query.start)//2018-05-14T00:00:00.000Z
      q += `+AND+(start_s:[ ${query.start} TO *])`

    if(query.end)//2018-05-14T00:00:00.000Z
      q += `+AND+(end_s:[ * TO ${query.end}])`

      // keyWordFilter:this.keyWordFilter,
      // selectedAgendaItem:(this.selectedAgendaItem===this.$t('agendaItem'))? this.selectedAgendaItem:'',
      // selectedProgramme:this.selectedProgramme,
      // selectedStream:this.selectedStream
    if(query.selectedStream)
      q += `+AND+(stream_ss:${query.selectedStream})`
    if(query.selectedProgramme)
      q += `+AND+(thematicAreas_ss:${query.selectedProgramme})`
    if(query.keyWordFilter)
      q += `+AND+(text_${this.$i18n.locale.toUpperCase()}_txt:"${query.keyWordFilter}*")`
    return q
  }

  function getConference(){
    let path = `/api/v2016/event-groups/5988cb15f166c38e3ec3addc`

    let response = axios.get(path).then((r)=>{
      this.conference= r.data
      return r.data
    })
    return response
  }

  function genFields(query){
    return `conference_s,timezone_s,itemShowFiles_ss,itemFiles_ss,itemText_ss,item_ss,itemMeeting_ss,stream_ss,organizers_ss,organizer_s,organizerEmail_s,roomTitle_s,roomLocation_s,roomLocalName_s,description_${query.locale.toUpperCase()|| 'EN'}_t,title_${query.locale.toUpperCase() || 'EN'}_t,start_dt,end_dt,identifier_s,createdBy_s,createdByEmail_s,createdDate_dt,modifiedBy_s,modifiedByEmail_s,updatedDate_dt`
  }
//
  async function getEvents(query){
    if(!query.conference) {
      this.conference = await this.getConference()
      query.conference = this.conference._id
    }

    let events = {}
    let endPoint = `/api/v2013/index/select`
    let path = `${endPoint}?fl=${genFields(query)}&q=${this.genQuery(query)}&sort=start_dt+DESC&start=0&wt=json&rows=300`
    let responce = await axios.get(path)

    events.raw  = sanitizeIndexResult(responce.data.response.docs)
    events.days = mapByDay(events.raw)
    events.weeks = mapByWeek(events.days)

    return events
  }
  function sanitizeIndexResult(docs){

    for (var i = 0; i < docs.length; i++) {

      for (let variable in docs[i]) {
        if(~variable.indexOf('_')){
          let sanitizedPropName = variable.slice(0,variable.indexOf('_'))
          docs[i][sanitizedPropName] = docs[i][variable]
        }
      }
    }
    return docs
  }
  function mapByDay(docs){
    let days = {}

    for (var i = docs.length-1; i >=0; i--) {
      let dayStart = DateTime.fromISO(docs[i].start).startOf('day')
      let dayEnd = DateTime.fromISO(docs[i].start).endOf('day')
      let start = DateTime.fromISO(docs[i].start)
      if(!days.hasOwnProperty(dayStart.toUTC().toISODate())) days[dayStart.toUTC().toISODate()]=[]

      if(start>=dayStart && start<=dayEnd)
        days[dayStart.toUTC().toISODate()].push(docs[i])
    }
    return days
  }

  function mapByWeek(days){
    let weeks = {}

    for (var day in days) {
      let week  = DateTime.fromISO(day).toUTC().year+'-'+DateTime.fromISO(day).toUTC().weekNumber
      if(!weeks.hasOwnProperty(week)) weeks[week]={}
      weeks[week][day]=days[day]
    }
    let weekArr = Object.values(weeks)
    //link listafy
    for (let i = 0; i < weekArr.length; i++) {
      if(i>0)
        weekArr[i].next = weekArr[i-1]
      if(i<weekArr.length-1)
        weekArr[i].prev = weekArr[i+1]
    }

    return weeks
  }
</script>
<style >
  @import url('assets/style/patterns/button-groups/build.css');

</style>
<style module>

.noUnderLine {text-decoration: none;}
.outer-cont {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.inner-cont {
  background-color: rgba(255,255,255,.8);
  padding: 15px 25px;
  width: 100%;
  max-width: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 40%;
  z-index: 10;
}
.particles-cont {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

.particles {
  width: 100%;
  height: 100vh;
}
</style>
