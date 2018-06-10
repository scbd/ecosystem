<template>
  <section >
      <div :class="$style['outer-cont']" >
        <div :class="$style['inner-cont']">
          <div class="row">
            <!-- <pre>{{$style}}</pre> -->
            <img src="https://attachments.cbd.int/cbd-logo-en.svg" :title="$t('scbdLogo')" :alt="$t('scbdLogo')"/>
          </div>
          <div class="row">
            <div class="col-xs-12 text-center">
              <h1>Design Ecosystem</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 text-center">
              <button type="button" class="btn btn-default disabled" :class="$style.noUnderLine">Get Started</button>
            </div>
            <div class="col-xs-4 text-center ">
              <button type="button" class="btn btn-default disabled" :class="$style.noUnderLine">Road Map</button>
            </div>
            <div class="col-xs-4 text-center">
              <a href="https://github.com/scbd/ecosystem" class="btn btn-default" :class="$style.noUnderLine">GitHub</a>
            </div>
          </div>

        </div>
        <no-ssr>
          <div :class="$style.particlesCont">
            <vue-particles :class="$style.particles"
             color="#000000"
             :particleOpacity="0.7"
             linesColor="#000000"
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
          </div>
        </no-ssr>
    </div>
  </section>
</template>

<script>

export default {
  name:'index'
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
