<template>
  <div>
    <template v-if="loadingUsername">
      <p>Loading...</p>
    </template>
    <template v-else>
      Hello, {{ username }} - sent the auth token which is wrong
    </template>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data: async () => ({
    username: '',
    loadingUsername: true
  }),
  methods: {
    getUsername: () => {
      fetch(`/api/accounts/${localStorage.getItem('AuthToken')}`).then(res => {
        res.json()
      }).then(json => {
        this.username = json.username
        this.loadingUsername = false
      })
    }
  },
  created() {
    this.getUsername()
  }
}
</script>

<style scoped>

</style>