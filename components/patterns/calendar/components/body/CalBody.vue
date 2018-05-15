<template>
  <div :class="[$style.main]">
    <transition
    name="slide-week"
      v-on:leave="leave"
    >
      <CalWeekBody v-if="!selectedIteration.loading" :week="selectedIteration" keep-alive/>
    </transition>
  </div>
</template>

<script>
  import CalWeekBody from './CalWeekBody'
  let Velocity = {} //ssr stub

  export default {
    name: 'CalBody',
    props:['selected-iteration'],
    components:{CalWeekBody},
    mounted() {Velocity = require('velocity-animate')},
    methods:{
      leave:leave
    }
  }

  function leave(el){
    let change = this.selectedIteration.change ? '' : '-'
    let num = Math.abs(this.selectedIteration.changeNum )
    let time = 750
    if(num>1) time = 1600
    for (let ref in this.$children[0].$refs)
      this.$children[0].$refs[ref].style.display='block'

    Velocity(el,{ translateX: `${change}${num}00%`,color:'inherit' })

    setTimeout(() =>{
      this.selectedIteration.loading = false
    },time)
  }

</script>
<style>
.slide-week-leave-active {
  transition: all 1.5s ease;
}
</style>
<style module>
  .main{
    height:100%;
    padding: 3.5em 0 3.5em 0;
  }
  .child{
    margin-right: 100%;
  }
</style>
