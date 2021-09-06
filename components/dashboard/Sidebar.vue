<template>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <nuxt-link to="/home">Phreezone</nuxt-link>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-header">
        <div class="user-pic">
          <img
            class="img-responsive img-rounded"
          :src="$auth.user.gender == 'm' ? require('@/assets/img/user.jpg') : require('@/assets/img/logo.png')"
            alt="User picture"
          >
        </div>
<!--        <div class="user-info">-->
<!--          <span class="user-name">-->
<!--            <strong>{{ $auth.user.full_name }}</strong><br>-->
<!--            <span v-if="$auth.user.package" class="badge badge-pill badge-warning">{{ $auth.user.package.name }}</span>-->
<!--            <span v-else class="badge badge-pill badge-light">N/P</span>-->
<!--          </span>-->
<!--          <span v-if="isAdmin" class="user-role">Administrator</span>-->
<!--        </div>-->
      </div>
      <div>
        <div v-if="pckLevel" class="pl-3 pr-3">
          <span>
            <span style="color: lightgrey">Next package</span>
            <span class="badge badge-pill badge-primary">{{ pckLevel.nextPackage.name }}</span>
          </span>
          <h2>
            <a-progress class="ant-progress-status-success" :percent="pckLevel.packageLevel"/>
          </h2>
        </div>
        <div v-else class="pl-3 pr-3">
          <span>Next package <span class="badge badge-pill badge-primary">Treasure</span></span>
          <h2>
            <a-progress class="ant-progress-status-exception" :percent="0"/>
          </h2>
        </div>
      </div>
      <!-- sidebar-header  -->
      <!--      <div class="sidebar-search">-->
      <!--        <div>-->
      <!--          <div class="input-group">-->
      <!--            <input type="text" class="form-control search-menu" placeholder="Search...">-->
      <!--            <div class="input-group-append">-->
      <!--              <span class="input-group-text">-->
      <!--                <i class="fa fa-search" aria-hidden="true"></i>-->
      <!--              </span>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!-- sidebar-search  -->
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>

          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-id-card"></i>
              <span>Membership</span>
              <!--              <span class="badge badge-pill badge-warning">New</span>-->
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li v-if="isStockist">
                  <nuxt-link to="/register">Add new Member</nuxt-link>
                </li>
                <li v-if="isAdmin">
                  <nuxt-link to="/users">All Members</nuxt-link>
                </li>
                <li v-if="isStockist">
                  <nuxt-link to="/pop">POP</nuxt-link>
                </li>
                <!--                <li>-->
                <!--                  <nuxt-link to="#">Sponsor Network Tree</nuxt-link>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <a href="#">Placement Activities</a>-->
                <!--                </li>-->
                <li>
                  <nuxt-link to="/placement-list">Placement List</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/sponsor-list">Sponsor's List</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/team-performance">Team Performance Activities</nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-credit-card"></i>
              <span>Commission</span>
              <!--              <span class="badge badge-pill badge-danger">3</span>-->
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><nuxt-link to="/commissions">Commission</nuxt-link></li>
                <li v-if="isStockist == '1'"><nuxt-link to="/shopping-credit">Shopping Credit</nuxt-link></li>
                <li><a href="#">Incentive Point Management</a></li>
                <!--                <li v-if="isAdmin"><nuxt-link to="/sales">Stockist Sales</nuxt-link></li>-->
              </ul>
            </div>
          </li>
          <li v-if="isStockist == '1'" class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-id-card"></i>
              <span>Order Management</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><nuxt-link to="/upgrade-order">Upgrade Order</nuxt-link></li>
              </ul>
            </div>
          </li>
          <li v-if="isStockist" class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-id-card"></i>
              <span>Stockist Management</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li v-if="isAdmin"><nuxt-link to="/stockist-commission">Stockist Commission</nuxt-link></li>
                <li><nuxt-link to="/stockist-sales">Stockist Sales</nuxt-link></li>
              </ul>
            </div>
          </li>
          <li>
            <nuxt-link to="/bought-items">
              <i class="fa fa-folder"></i>
              <span>Bought Items</span>
            </nuxt-link>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-envelope"></i>
              <span>Message Control</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <nuxt-link to="/home">View Announcement</nuxt-link>
                </li>
                <!--                <li>-->
                <!--                  <a href="#">Contact Us</a>-->
                <!--                </li>-->
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <!-- sidebar-content  -->
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <nuxt-link to="/settings">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </nuxt-link>
      <a @click="$auth.logout()" href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'dashboardSidebar',
    data() {
      return {
        pckLevel: ''
      }
    },
    methods: {
      async getPackageLevel() {
        this.pckLevel = (await this.$axios.$get(`user/${this.userId}/packageLevel`)).data
      }
    },
    mounted() {
      // this.getPackageLevel()
    }
  }
</script>

<style scoped>
</style>
