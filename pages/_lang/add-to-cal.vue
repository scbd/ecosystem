<template>
  <section >
    <no-ssr>
    <AddToCal :event="calEvent"/>
  </no-ssr>
  </section>
</template>

<script>

import calEvent from '@scbd/eco-molecule-add-to-calendar/src/mock-event.json'
import AddToCal from '@scbd/eco-molecule-add-to-calendar/dist/vue/AddToCalendar.umd'

export default {
  name:'add-to-cal',
  asyncData:function (){
    return {
      calEvent : calEvent
    }
  },
  components:{AddToCal}

}

</script>
<style >
  @import url('assets/style/patterns/button-groups/build.css');
  @import url('@scbd/eco-molecule-add-to-calendar/dist/vue/AddToCalendar.css');
  @import url('@scbd/ecosystem-icons/all/all.css');

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
