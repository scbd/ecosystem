<template>
  <div  v-if="options" style="position:relative; width:100%">
    <div class="cont" ref='map'></div>
  </div>
</template>

<script>
import { Mixin, MapBuilderBase } from '../src/index'

export default {
  name   : 'AmMap',
  mixins : [ Mixin ],
  methods: { constructMap },
  mounted
}


function mounted (){ setTimeout(() => this.constructMap(), 100) }// not sure why but map does not mount without a bit of a time out }


async function constructMap(){
  this.opts  = await this.whenOptions()

  this.map = new MapBuilderBase(this.$refs.map, this.opts)
}
</script>

<style scoped>
  .cont{ width: 100%; height: 450px; }
</style>