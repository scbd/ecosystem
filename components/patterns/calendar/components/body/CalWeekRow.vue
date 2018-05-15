<template>
  <div  :class="[$style.main]">
    <!-- {{day.dayOfWeekShort}}
    {{day.dayNumber}} -->
    <div class="text-center" :class="[$style.mainTitleChild]">
    {{day.subTitle}} <br>
    {{day.title}}
    </div>
    <div :class="[$style.mainChildCont]">
      <CalEvent v-for="(evnt, index) in events" :class="[$style.mainChild]"/>
      <!-- <div class="debug" v-for="(evnt, index) in events" :class="[$style.mainChild]">
        {{evnt.title}} {{index}}
      </div> -->
    </div>
  </div>
</template>

<script>
import CalEvent from '../event/CalEvent'
export default {
  name: 'CalWeekRow',
  props:['day','events'],
  components:{CalEvent}
}
</script>

<style module>
  .main{
    position: relative;
    height:14.2857%;
    padding-left:10%;
    border-bottom: 1px solid #eeeeee;

  }
  .mainChildCont{
    height:100%;
    width:100%;
    float: left;

    overflow-x: auto;

    white-space: nowrap;

  }
  .mainChild{
    display: inline-block;
    width:19.80%;
    height:95%;

    margin: .1% .1% .1% .1%;
  }
  .mainTitleChild{
    position: absolute;
    left: 0;
    top:0;
    bottom:0;
    width:10%;
    height:100%;
    float: left;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
  }
</style>
