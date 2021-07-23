<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <TheFooter />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSidenav.vue';
import TheFooter from '@/components/Navigation/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif !important;
  }

  body {
    font-family: 'Open Sans', sans-serif !important;
    margin: 0;
  }
</style>
