<template functional>
  <a class="navbar-brand" href="/" :title="parent.$t('Convention on Biological Diversity')">
    <img id="scbdLogo" :srcset="`https://attachments.cbd.int/${parent.$i18n.locale}/CBD_logo_green.webp, https://attachments.cbd.int/${parent.$i18n.locale}/CBD_logo_green.png`" :alt="parent.$t('Convention on Biological Diversity')">
  </a>
</template>