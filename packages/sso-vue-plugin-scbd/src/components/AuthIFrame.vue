<template>
  <iframe v-once id="authFrame" style="display:none;" ref="authFrame" :src="`${url}/app/authorize.html`"/>
</template>

<script>

export default {
  name    : 'AuthIFrame',
  computed: { url },
  mounted
}

function url(){
  return this.$auth.accountsUrl
}

function mounted (){
  if (this.$isServer) return
  if(!this.$refs || !this.$refs.authFrame) return false
  
  window.addEventListener('message', this.$auth.receivePostMessage)

  this.$refs.authFrame.onload = () => {
    const { contentWindow } = this.$refs.authFrame
    const   type            = 'getAuthenticationToken'
    const   msg             = JSON.stringify({ type })

    return contentWindow.postMessage(msg, this.url)
  }
}
</script>
