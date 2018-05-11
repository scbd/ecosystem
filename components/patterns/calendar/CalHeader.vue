<template>
  <div class="container-fluid">
<div class="row" :class="[$style.bg]">

  <div class="col-xs-5ths text-center debug">
    &nbsp;x
  </div>
  <div class="col-xs-5ths text-center debug">
    &nbsp;x
  </div>
  <div class="col-xs-5ths text-center debug">
    &nbsp;x
  </div>
  <div class="col-xs-5ths text-center debug">
    &nbsp;x
  </div>
  <div class="col-xs-5ths text-center debug">
    &nbsp;x
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'CalHeader'
}
</script>

<style module>
  .bg{
    background-color: #eeeeee;
    height: 3em;
  }
</style>
