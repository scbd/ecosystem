<template>
  <section ref="main">
    <div  :class="[$style.calComponent]">
      <CalHeader :selected-iteration="selectedIteration" />
      <CalBody :query="" :selected-iteration="selectedIteration" :events="events"/>
      <CalFooter :iterations="iterations" @action="changeDateTime"/>
    </div>
  </section>
</template>

<style module>
  .calComponent{
    position: relative;
    height: 100vh;
    width: 100vw;
    padding-bottom:5.3em;
  }
</style>

<script>
  import {DateTime}     from 'luxon'
  import 'normalize.css/normalize.css'
  import '@biodiversity/ecosystem-icons/all/all.css'
  import "@biodiversity/ecosystem-style/layouts/base/build.min.css"
  import "@biodiversity/ecosystem-style/layouts/container/build.min.css"
  import "@biodiversity/ecosystem-style/layouts/grid/build.min.css"
  import "@biodiversity/ecosystem-style/modifiers/text/build.min.css"

  import events          from '../modules/Bus'
  import CalBody         from './body/CalBody'
  import CalHeader       from './header/CalHeader'
  import CalFooter       from './footer/CalFooter'
  import CalWeeks        from '../modules/CalWeeksService'
  import messages        from '../locales'

  export default {
    name: 'Calendar',
    props:['options'],
    data:function(){
      return{
        events:{},
        query:{},
        iterationsService:this.setIterationsService(this.$i18n,this.$route.query.selected)
    }},
    components:{CalFooter,CalHeader,CalBody},
    computed:{
      iterations:function(){ let its;  if(this.iterationsService) its = this.iterationsService.iterations; return its || []},
      selectedIteration:function(){return this.iterationsService.selected || {}}

    },
    methods: {
      changeDateTime:changeDateTime,
      setIterationsService:setIterationsService,
      getEvents:getEvents,
      setQueryString:setQueryString,
      queryObject:queryObject
    },
    mounted:function(){
      events.$on('showFilter', this.applyFilter)
    },
    created: function(){
      this.queryObject()
      if(!this.$route.query || !this.$route.query.selected)
        this.$router.replace({
                  query: { selected: DateTime.local().toFormat('yyyy-MM-dd') }
                })
      else if(this.$route.query.selected)
        this.iterationsService=this.setIterationsService(this.$i18n,this.$route.query.selected)
      this.getEvents().then((e)=>{ this.events = e})
    },
    beforeCreate:function(){

      if(!this.$i18n)
        throw new Error('$i18n must be installed')

      if(this.$i18n)
        for (let locale in messages){
          let msgs = this.$i18n.getLocaleMessage( locale )
          this.$i18n.setLocaleMessage( locale, Object.assign(msgs,messages[locale]) )
        }
    }

  }

  function applyFilter (e){
    if(e && e.hasOwnProperty('data'))
      if(!e.data.show)
        console.log('e.data.keyWordFilter',e.data.keyWordFilter)

  }
  function getEvents(){
    return this.options.queryFn(this.query).then((e)=>{
      this.$set(this,'events',e)
    })
  }
  function queryObject (){
    let {locale,conference} = this.options

    let query = Object.assign({},{locale,conference})
    if(!query.locale)query.locale='en'
    this.query = query
    return query
  }

  function changeDateTime(numberOfIterations){
    if(!this.iterationsService) this.setIterationsService()
    let num = Number(numberOfIterations)
    this.setQueryString(num)
    this.getEvents(this.query).then((e)=>{
      this.iterationsService.add(num)
    })
  }

  function setQueryString(interations){
    let nextIteration
    if(interations==-1) nextIteration = this.selectedIteration.next
    if(interations==-2) nextIteration = this.selectedIteration.next.next
    if(interations==2) nextIteration = this.selectedIteration.prev.prev
    if(interations==1) nextIteration = this.selectedIteration.prev

    this.$router.replace({
      query: { selected: nextIteration.aDateTime.toFormat('yyyy-MM-dd') }
    })
    let start = nextIteration.aDateTime.toUTC().toISO()
    let end = nextIteration.endDateTime.toUTC().toISO()

    this.query.start = start
    this.query.end = end
  }

  function setIterationsService($i18n,date, type='week'){

    if(!$i18n) throw new Error('must have i18n installed')
    let opts   = this? this.options : {}
    let locale = opts.locale || 'en'//getUserAgentLocale()
    if(date) date = DateTime.fromISO(date)
    else date = DateTime.local()
    if(type==='week')
      return new CalWeeks($i18n,date,locale)
  }
</script>

<style>
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
.debugB {
  border: 1px solid blue;
}
.debug {
  border: 1px solid red;
}
</style>
