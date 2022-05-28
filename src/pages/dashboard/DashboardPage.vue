<template>
  <v-app>
    <template v-if="loadingTeams">
      <p>Loading...</p>
    </template>
    <template v-else>
      {{ teamResponse }}
    </template>

    <ProjectCard v-for="team in testProjects" :key="team.id"
                 :description='team.description'
                 :image='team.image'
                 :members='team.members'
                 :name='team.name '
                 :projects='team.projects'
                 class="rounded-card"/>

    <TeamCard v-for="team in testTeams"
              :id='team.id'
              :key='team.id'
              :description='team.description'
              :image='team.image'
              :members='team.members'
              :name='team.name '
              :projects='team.projects'
              class="rounded-card"/>
  </v-app>
</template>

<script>
import TeamCard from "@/pages/dashboard/TeamCard";
import ProjectCard from "@/pages/dashboard/ProjectCard";

export default {
  name: 'DashboardPage',
  components: {ProjectCard, TeamCard},
  data: () => ({
    teamResponse: '',
    loadingTeams: true,
    testProjects: [
      {
        id: '0123456789',
        name: 'Project 1',
        description: 'Project 1 description',
        members: ['20123456789', '20123456789'],
        cards: ['20123456789', '20123456789'],
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      },
      {
        id: '20123456789',
        name: 'Project 1',
        description: 'Project 1 description',
        members: ['20123456789', '20123456789'],
        projects: ['20123456789', '20123456789'],
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      }
    ],
    testTeams: [
      {
        id: '0123456789',
        name: 'Team 1',
        description: 'Team 1 description',
        members: ['0123456789', '0123456789'],
        projects: ['0123456789', '0123456789'],
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
      },
      {
        id: '20123456789',
        name: 'Team 2',
        description: '2 Short description',
        members: ['20123456789', '20123456789'],
        projects: ['20123456789', '20123456789'],
        image: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
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
        this.teamResponse = json
      })
    }
  },
  mounted() {
    this.getTeams()
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 40px;
}
</style>