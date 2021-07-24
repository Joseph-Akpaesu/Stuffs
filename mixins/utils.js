export default {
  methods: {
    isNumber(val) {
      return /^\d+$/.test(val);
    },
    removeErrorClass(selector) {
      document.querySelector(selector).classList.remove('is-invalid')
    },
    async login({ username, password }) {
      try {
        let response = await this.$auth.loginWith('local', {data: {username, password}})
        this.$auth.setUser(response.data.user)
        return 'done'
      } catch (e) {
        console.log(e)
      }
    }
  }
}
