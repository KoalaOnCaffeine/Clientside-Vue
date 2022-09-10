<template>
  <v-app>
    <DashboardTopBar class="mb-12"/>
    <v-container class="mt-12">
      <v-row>
        <v-spacer/>
        <v-col cols="9">
          <template v-if="loadingTeams">
            <p>Loading...</p>
          </template>
          <template v-else>
            <v-row class="justify-center">
              <v-col v-for="team in teams" :key="team.id" cols="4">
                <TeamCard :id="team.id"
                          :description="team['description']"
                          :image="team['imageURL']"
                          :members="team['memberIDs']"
                          :name="team['name']"
                          :projects="team['projectIDs']"
                          class="rounded-card"
                />
              </v-col>
            </v-row>
          </template>
        </v-col>
        <v-col cols="3" style="border: black 1px solid">
          Bordered
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TeamCard from "@/pages/dashboard/TeamCard";
import DashboardTopBar from "@/common-components/DashboardTopBar";

export default {
  name: 'DashboardPage',
  components: {TeamCard, DashboardTopBar},
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