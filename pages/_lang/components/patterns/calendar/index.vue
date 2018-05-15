<template>
  <section >

    <Calendar :options="{locale:'en'}"/>

  </section>
</template>

<script>
import {Calendar} from '~/components/patterns/calendar'
export default {
  name:'ComponentPatternsCalendarPage',
  components:{Calendar}
}
</script>

<style >

</style>
<style module>

</style>
