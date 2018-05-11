<template>
  <section>
    <CalHeader/>
    main cal
    <CalFooter/>
  </section>
</template>

<script>
  import CalEvent              from '~/components/patterns/calendar/CalEvent'
  import CalHeader             from '~/components/patterns/calendar/CalHeader'
  import CalFooter             from '~/components/patterns/calendar/CalFooter'
  import CalWeekRow            from '~/components/patterns/calendar/CalWeekRow'

  export default {
    name: 'Calendar',
    components:{CalEvent,CalHeader,CalFooter,CalWeekRow}
  }
</script>

<style>

</style>
