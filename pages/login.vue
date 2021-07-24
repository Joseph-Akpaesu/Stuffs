<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card card-outline-secondary">
        <div class="card-header m-b-33">
          <h3 class="">Login</h3>
        </div>
        <div class="card-body">
          <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" class="form-control" id="username">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" autocomplete="new-password" class="form-control" type="password">
            </div>

            <!--            <small @click="$emit('loginRegister', 'Register')">Create account? <a href="#">Register</a></small>-->
            <!--        <div class="form-check small">-->
            <!--          <label class="form-check-label">-->
            <!--            <input class="form-check-input" type="checkbox">-->
            <!--            <span>Remember me on this computer</span>-->
            <!--          </label>-->
            <!--        </div>-->
            <button @click.prevent="submitForm" :disabled="!username || !password" class="btn btn-success btn-sm float-right" type="submit">
              {{ loading ? 'Loading ...' : 'Login' }}
            </button>
          </form>
        </div><!--/card-block-->
      </div><!-- /form card login -->
    </div>
  </div>
</template>

<script>
  import utils from '@/mixins/utils'
  export default {
    name: 'login',
    mixins: [utils],
    data() {
      return {
        loading: false,
        username: '',
        password: ''
      }
    },
    methods: {
      async submitForm() {
        if (!this.username || !this.password) {
        this.$message.error('All fields are requierd')
          return
        }

        this.loading = true
        try {
          await this.login({ username: this.username, password: this.password })
          this.loading = false
        } catch (err) {
          this.loading = false
          console.log(err.status)
        }
      },

    },
    beforeMount() {

    },
    computed: {

    }
  }
</script>

<style scoped>
  .row {
    margin: 100px 0;
  }
</style>
