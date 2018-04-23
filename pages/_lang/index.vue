<template>
  <section >
    <div class="backer" v-lazy:background-image="require('~/assets/img/eye-small.jpg')">
      <div class="container debug">
        <div class="row">

          <div class="debug " style="width:100%;">x
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 debug">6
          </div>
          <div class="col-xs-6 debug">6
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 debug">6
          </div>
          <div class="col-xs-6 debug">6
          </div>

        </div>
        <div class="row">
          <div class="col-xs-12 debug">12
          </div>
        </div>
      </div>
      <no-ssr>
       <vue-particles
         color="#ffffff"
         :particleOpacity="0.7"
         linesColor="#ffffff"
         :particlesNumber="80"
         shapeType="circle"
         :particleSize="5"
         :linesWidth="2"
         :lineLinked="true"
         :lineOpacity="0.4"
         :linesDistance="150"
         :moveSpeed="3"
         :hoverEffect="true"
         hoverMode="grab"
         :clickEffect="true"
         clickMode="push">
       </vue-particles>
     </no-ssr>
    </div>
  </section>
</template>

<script>
import Vue            from 'vue'
import VueLazyload    from 'vue-lazyload'
Vue.use(VueLazyload,{preload:1.5})

export default {
  name:'index'
}
</script>

<style>
.debug {
  border: 1px solid red;
  min-width: 5px;
  min-height: 5px;
  color:#ffffff;
}
.backer{
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
