<template>
  <v-card class="ma-4" height="500" max-height="500" max-width="75%" outlined width="500">
    <v-card-title style="position:absolute;">{{ name }}</v-card-title>
    <v-img :src="image" class="rounded-image" height="100" style="opacity: 45%"></v-img>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-card-text>
            {{ description }}
          </v-card-text>
        </v-col>
        <v-col cols="3">
          <v-container>
            <v-row>
              <v-col v-for="i in Math.min(3, loadedMembers.length)" :key="i" cols="3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" @click="redirectToProfile(loadedMembers[i-1].id)" v-on="on">mdi-account
                    </v-icon>
                  </template>
                  <!-- v-for i in 3 uses values 1, 2 and 3, so subtract one to get the right value -->
                  <span>{{ loadedMembers[i - 1].name }}</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="text-align: center; height: 65%">
      <v-row class="fill-height text-left">
        <v-col class="text-left">
          Recent Cards
          <div v-for="i in 3" :key="i">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="mt-5">
                  <v-icon v-bind="attrs" v-on="on">mdi-card</v-icon>
                  {{ loadedRecentCards[i - 1].name }}
                </div>
              </template>
              <span>{{ loadedRecentCards[i - 1].description }}</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-divider class="ml-2 mr-2" vertical/>
        <v-col class="text-left">
          Upcoming deadlines
          <div v-for="i in 3" :key="i">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="mt-5">
                  <v-icon v-bind="attrs" v-on="on">mdi-card</v-icon>
                  {{ loadedUpcomingCards[i - 1].name }}
                </div>
              </template>
              <span>{{ loadedUpcomingCards[i - 1].description }}</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ['name', 'image', 'description', 'members', 'cards', 'id'],
  data: () => ({
    loadedMembers: [
      {'id': '0123456789', 'name': 'elizabeth olsen'},
      {'id': '0123456788', 'name': 'rafe cameron'},
      {'id': '0123456777', 'name': 'chris hemsworth'}],
    loadedRecentCards: [
      {'name': 'Recent 1', 'description': 'Card 1 description shows when you hover'},
      {'name': 'Recent 2', 'description': 'Card 2 description shows when you hover'},
      {'name': 'Recent 3', 'description': 'Card 3 description shows when you hover'}
    ],
    loadedUpcomingCards: [
      {'name': 'Upcoming 1', 'description': 'Card 1 description shows when you hover'},
      {'name': 'Upcoming 2', 'description': 'Card 2 description shows when you hover'},
      {'name': 'Upcoming 3', 'description': 'Card 3 description shows when you hover'}
    ]
  }),
  methods: {
    redirectToProfile: function (id) {
      document.location.href = `/profile/${id}/`
    },
    getTeam: function () {
      // Load the right cards and members
      // Load 3 user accounts from the team
      for (let i in 3) {
        fetch(`/api/accounts/${this.members[i]}`).then(res => {
          if (res.status !== 200) {
            this.loadedMembers[i] = res.json()
          }
        })
      }
    }
  },
  mounted() {
    this.getTeam()
  }
}
</script>

<style scoped>
.rounded-image {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
</style>