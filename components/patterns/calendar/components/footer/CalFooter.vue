<template>
  <div class="container-fluid slide-cont" >
    <div class="row" :class="[$style.bg]">
      <!-- <div v-swipe="handalers()" class="debug"> -->
  <!-- <div v-drag="handlers()" class="debug"> -->
      <transition name="slide"
                  v-for="(item, index) in iterations"
                  v-bind:key="item.weekNumber"
                  v-on:leave="leave"

                  >
        <div v-on:click="changeDate(index)" v-if="inBounds(item,index)" :class="[$style.bg,(index===7 && iterations.length===15)?$style.selected:'']" class="col-xs-5ths text-center">
          <span >{{item.startMon}}<br>
          {{item.startDay}}-{{item.endDay}}
          </span>
        </div>
      </transition>
  <!-- <div :class="[$style.currentOverlay]">&nbsp;</div> -->
    </div>
  </div>
</template>

<script>
import CalTouch  from '../../directives/Touch'
// import Velocity  from 'velocity-animate'
let Velocity = {}
export default {
  name: 'CalFooter',
  directives:{swipe:CalTouch},
  props:['iterations'],
  mounted() {Velocity = require('velocity-animate')},
  methods:{
    left:left,
    right:right,
    tap:tap,
    changeDate:changeDate,
    handlers: function(){return{left:this.left,right:this.right}},
    inBounds:function(iteration,index){

        if(this.iterations.length !== 15) return false
        if(index > 4 && index < 10) return true
        return false
    },

    leave:leave
  }
}// export

function changeDate(index){
  if(Number(index) === 7) return
  this.change = ((7 - Number(index)) >0)
  return  this.$emit('action',7 - Number(index) )
}

function leave(el){
  if(this.iterations.length === 15) return false
  // if(this.$isServer) return
  let change = this.change ? '' : '-'
  Velocity(el,{ translateX: `${change}100%`,'background-color':'#eeeeee',color:'inherit' }, { duration: 20 })
}

function left(e,points){
  console.log('event',e)
  console.log('points',points)
  return 'left'
}
function right(e,points){
  console.log('event',e)
  console.log('points',points)
  return 'right'
}

function tap(e,points){
  console.log('event',e)
  console.log('points',points)
  return 'tap'
}
</script>


<style>
.slide-cont{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height: 3.5em;
  cursor: pointer;
}
.slide-enter-active {
  transition: all .4s ease;
}
.slide-leave-active {
  transition: all .4s ease;
}

  .col-xs-5ths {
    position: relative;
    min-height: 3.5em;
    padding-right: 15px;
    padding-left: 15px;
    display: inline-block;
    width: 20%;
  }

</style>
<style module>
  .bg{
    background-color: #eeeeee;
    height: 3.5em;
    line-height: 1.75em;
    white-space: nowrap;
  }

  .selected{
    color: #ffffff;
    background-color: rgba(0,0,255,.8);
  }

  .currentOverlay{
    position:absolute;
    width: 10%;
    height: 95%;
    bottom: 0;
    left:45%;
  }
</style>
