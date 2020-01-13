<template>
  <iframe id="authFrame" style="display:none;" ref="authFrame" :src="`${url}/app/authorize.html`"/>
</template>

<script>
export default {
  name: 'AuthIFrame',
  mounted
}

function mounted (){
  if (!this.$isServer)
    window.addEventListener('message', this.receivePostMessage)
    
  if(!this.$refs || !this.$refs.authFrame) return false

  this.$refs.authFrame.onload = () => {
    const { contentWindow } = this.$refs.authFrame
    const   type            = 'getAuthenticationToken'
    const   msg             = JSON.stringify({ type })

    return contentWindow.postMessage(msg, this.url)
  }
}
</script>
