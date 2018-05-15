<template>
  <div class="container-fluid" :class="[$style.bg]">
    <div class="row" >
      <div class="col-xs-6" :class="[$style.left]">
        <span :class="[$style.title]">{{selectedIteration.title}}</span><br>
        <span>{{selectedIteration.subTitle}}</span>
      </div>
      <div class="col-xs-6" :class="[$style.right]">
        &nbsp;
        <!-- menu -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalHeader',
  props:['selectedIteration']
}
</script>

<style module>
  .bg{
    position:absolute;
    top:0;
    left:0;
    right:0;
    background-color: #eeeeee;
    height: 3.5em;
  }
  .left{
    line-height: 1.75em;
  }
  .right{
    line-height: 3.5em;
    text-align: right;
  }
  .title{
    font-weight: bold;
  }
</style>
