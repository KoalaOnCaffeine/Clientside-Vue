<template>
  <v-app>
    <template v-if="loadingTeams">
      <p>Loading...</p>
    </template>
    <template v-else>
      <TeamCard v-for="team in teams" :id="team.id" :key="team.id"
                :description="team['description']"
                :image="team['imageURL']"
                :members="team['memberIDs']"
                :name="team['name']"
                :projects="team['projectIDs']"
                class="rounded-card"
      />
    </template>
  </v-app>
</template>

<script>
import TeamCard from "@/pages/dashboard/TeamCard";

export default {
  name: 'DashboardPage',
  components: {TeamCard},
  data: () => ({
    teams: [],
    loadingTeams: true,
  }),
  methods: {
    loadTeams: function () {
      fetch('/api/teams/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("AuthToken")}`
        }
      }).then(res => {
        if (parseInt(res.status / 100) === 4) {
          // Fail code, either an invalid/no token
          document.location.href = '/login/'
        } else {
          // Read the text, parse it and access the teams
          res.text().then(text => {
            this.teams = JSON.parse(text).data.teams
            this.loadingTeams = false
          })
        }
      })
    }
  },
  mounted() {
    this.loadTeams()
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 40px;
}
</style>