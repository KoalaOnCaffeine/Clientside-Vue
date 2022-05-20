<template>
  <div>
    <template v-if="loadingTeams">
      <p>Loading...</p>
    </template>
    <template v-else>
      {{ teamResponse }}
    </template>

    <template v-for="team in testTeams">
      <TeamCard :id='team.id'
                :key='team.id'
                :description='team.description'
                :image='team.image'
                :members='team.members'
                :name='team.name '
                :projects='team.projects'/>
      <v-spacer :key="team.id"/>
    </template>
  </div>
</template>

<script>
import TeamCard from "@/pages/dashboard/TeamCard";

export default {
  name: 'DashboardPage',
  components: {TeamCard},
  data: () => ({
    teamResponse: '',
    loadingTeams: true,
    testTeams: [
      {
        name: 'Name',
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
        description: 'Short description',
        members: ['0123456789', '0123456789'],
        projects: ['0123456789', '0123456789'],
        id: '0123456789'
      }, {
        name: 'Name2',
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
        description: '2 Short description',
        members: ['20123456789', '20123456789'],
        projects: ['20123456789', '20123456789'],
        id: '20123456789'
      }
    ]
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