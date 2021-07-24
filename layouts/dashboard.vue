<template>
  <div class="page-wrapper chiller-theme toggled">
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <i class="fas fa-bars"></i>
    </a>
    <DashboardSidebar />
    <main class="page-content">
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import dashboardInit from '@/mixins/dashboardInit'

  export default {
    mixins: [dashboardInit],
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    watch: {
      '$route': function () {
        if(window.innerWidth < 767) {
          $(".page-wrapper").removeClass("toggled");
        }
      }
    }
  }


</script>

<style>
  @import "assets/css/dashboard.css";
</style>

