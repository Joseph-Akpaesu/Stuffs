<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppNav />
  </div>
</template>


<script>
  import AppHeader from '../components/guest/AppHeader'
  import AppNav from '../components/guest/AppNav.vue'
  export default {
    name: "guest",
    components: {AppHeader, AppNav}
  }
</script>

<style scoped>

</style>
