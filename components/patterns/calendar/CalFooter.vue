<template>
      <div class="container-fluid">
  <div class="row" :class="[$style.bg]">

      <div :class="[$style.bg]" class="col-xs-5ths text-center debug">
        &nbsp;x
      </div>
      <div :class="[$style.bg]"  class="col-xs-5ths text-center debug">
        &nbsp;x
      </div>
      <div :class="[$style.bg]"  class="col-xs-5ths text-center debug">
        &nbsp;x
      </div>
      <div :class="[$style.bg]" class="col-xs-5ths text-center debug">
        &nbsp;x
      </div>
      <div :class="[$style.bg]" class="col-xs-5ths text-center debug">
        &nbsp;x
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalFooter',
  props:['iterations']
}
</script>
<style>
.col-xs-5ths {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col-xs-5ths {
  width: 20%;
  float: left;
}

</style>
<style module>
  .bg{
    background-color: #eeeeee;
    height: 3.5em;
  }

</style>
