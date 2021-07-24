<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>


<script>
  import AppHeader from '../components/guest/AppHeader'
  export default {
    name: "guest",

    components: {AppHeader}
  }
</script>

<style scoped>

</style>
