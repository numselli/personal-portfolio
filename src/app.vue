<template>
  <background style="position: absolute; z-index: -1;" class="grey darken-4"></background>

  
  <headerBar></headerBar>
  <router-view style="min-height: calc(100vh - 160px);"></router-view>
  <footerBar></footerBar>
</template>
    
<script>
    import headerBar from './components/header.vue'
    import footerBar from './components/footer.vue'
    import background from './components/background.vue';
    
    export default {
      name: 'home',
      components: {
        headerBar,
        footerBar,
        background
      }
    }
</script>