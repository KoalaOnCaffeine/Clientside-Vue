<template>
  <div>
    <template v-if="loadingTeams">
      <p>Loading...</p>
    </template>
    <template v-else>
      {{ teamResponse }}
    </template>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data: () => ({
    teamResponse: '',
    loadingTeams: true
  }),
  methods: {
    getTeams: function () {

      fetch('/api/teams/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("AuthToken")}`
        }
      }).then(res => res.json()).then(json => {
        this.loadingTeams = false
        this.teamResponse = JSON.stringify(json)
        console.log(json)
      })
    }
  },
  mounted() {
    this.getTeams()
  }
}
</script>

<style scoped>

</style>