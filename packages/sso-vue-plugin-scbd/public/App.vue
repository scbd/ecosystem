<template>
  <div v-if="me" id="app" style="text-align: center;">

    <div v-if="eventMe" class="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>ENV: {{NODE_ENV}}</h1>
      <h1>Hello <strong>{{me.name}}</strong>.  The global me event caught.</h1>
      <h5>$accountsUrl: {{auth.accountsUrl}}</h5>
    </div>

    <div v-if="!eventMe" style="text-align: center;">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      <small>Waiting for $me event to emit user if you are logged in.</small>
    </div>

    <table class="pageCenter table table-striped table-sm mt-5" style="width:25%">
      <tr v-for="(value, name) in me" :key="name" >
        <th class="font-weight-bold" style="text-align:right;">{{name}}:</th>
        <th style="text-align:left;">{{value}}</th>
      </tr>
      <tr >
        <th class="font-weight-bold" style="text-align:right;">hasRole('user'):</th>
        <th style="text-align:left;">{{me.hasRole('User')}}</th>
      </tr>
    </table>

  <!-- <iframe src="https://accounts.cbd.int/app/authorize.html" style="display:none"></iframe>
  <iframe src="https://www.cbd.int" style="display:none"></iframe> -->
  </div>
</template>

<script>
const NODE_ENV = process.env.NODE_ENV

export default {
  name    : 'app',
  methods : { loadMe },
  computed: { NODE_ENV: () => NODE_ENV },
  created,
  data

}

function data(){
  return { eventMe: undefined }
}

async function created(){
  await this.$initSsoScbd()
  window.document.addEventListener('$me', this.loadMe)
}

function loadMe(evt){
  setTimeout(() => {
    this.eventMe = evt.$me
  }, 100)
}
</script>

<style>

.pageCenter {
	margin-left: auto;
	margin-right: auto;
	max-width: 1000px;
	float: none;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(182, 5, 5);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>
