<template>
  <section ref="main">
    <div  :class="[$style.calComponent]">
      <CalHeader :selected-iteration="selectedIteration"/>
      <CalBody :selected-iteration="selectedIteration"/>
      <CalFooter :iterations="iterations" @action="changeDateTime"/>

    </div>
  </section>
</template>

<script>
  import {DateTime}            from 'Luxon'
  import axios                 from 'axios'
  import querystring           from 'querystring'
  // import ICAL                  from 'ical.js'
  import {
    CalBody,
    CalHeader,
    CalFooter
  } from '../index'
 import CalWeeks              from '../modules/CalWeeksService'

  // import CalTouch              from './Touch'
  // import CalEvent              from './CalEvent'
  // import CalHeader             from './CalHeader'
  // import CalFooter             from './CalFooter'
  // import CalWeekRow            from './CalWeekRow'

  let iterationsService = setIterationsService()

  export default {
    name: 'Calendar',
    props:['options'],
    data:function(){
      getEvents(this.options)
      return{
      iterations:iterationsService.iterations || [],
      selectedIteration:iterationsService.selected || {}
    }},
    components:{CalHeader,CalFooter,CalBody},
    methods: {
      changeDateTime:changeDateTime,
      setIterationsService:setIterationsService
    },
    mounted: function(){
        if(getUserAgentLocale() !== this.options.locale)
          iterationsService.setLocale(this.options.locale)
    }
  }

function getUserAgentLocale (){
  let locales =[]
  let accepted =['en','fr','es','ar','ru','zh']

  if(typeof window !== 'undefined') locales = window.navigator.languages
  for (let i = 0; i < locales.length; i++)
    for (let j = 0; j < accepted.length; j++)
      if(~locales[i].indexOf(accepted[j]))
        return accepted[j]

  return locales[0]
}

  function changeDateTime(numberOfIterations){
    if(!iterationsService) this.setIterationsService()
    let num = Number(numberOfIterations)
    iterationsService.add(num)
    this.selectedIteration.loading = true
    this.selectedIteration.changeNum  = num
    this.selectedIteration.change  = !!(num>0)
    setTimeout(() =>{
      this.selectedIteration = iterationsService.selected
    },800*Math.abs(numberOfIterations))
  }

  function setIterationsService(type='week'){
    let opts   = this? this.options : {}
    let locale = opts.locale || getUserAgentLocale()

    if(type==='week')
      return new CalWeeks(DateTime.local(),locale)
  }

  async function getEvents(options){

  let icalText = await axios.get('https://api.cbddev.xyz/api/v2013/index/select?q=schema_s:reservation&rows=50&sort=updatedDate_dt+DESC&start=0&wt=json')
  let fields = `description_${options.locale.toUpperCase()}_t,title_${options.locale.toupperCase()}_t,identifier_s,createdBy_s,createdByEmail_s,createdDate_dt,modifiedBy_s,modifiedByEmail_s,updatedDate_dt`
  //  let icalText = await axios.get('https://api.cbddev.xyz/api/v2013/index/select?q=schema_s:reservation+AND+conference_s:5988cb15f166c38e3ec3addc&rows=50&sort=updatedDate_dt+DESC&start=0&wt=json')
console.log(fields)
    console.log(icalText.data)

  }
</script>
<style module>
  .calComponent{
    position: relative;
    height: 100vh;
    width: 100vw;
  }
</style>
<style>
  @import url("assets/style/layouts/base/build.min.css");
  @import url("assets/style/layouts/container/build.min.css");
  @import url("assets/style/layouts/grid/build.min.css");
</style>
