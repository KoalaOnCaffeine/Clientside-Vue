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
              <v-col v-for="i in 3" :key="i" cols="3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-account</v-icon>
                  </template>
                  <span>[Username]</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="text-align: center; height: 65%">
      <v-row class="fill-height text-left">
        <v-col>
          Recent Cards
          <div v-for="i in 3" :key="i">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="mt-5">
                  <v-icon v-bind="attrs" v-on="on">mdi-card</v-icon>
                  Loading recent...
                </div>
              </template>
              <span>[Name]</span>
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
                  Loading upcoming...
                </div>
              </template>
              <span>[Name]</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "TeamCard",
  props: ['name', 'image', 'description', 'members', 'projects', 'id'],
  data: () => ({
    loadedTeams: {},
  }),
  methods: {
    getTeams: function () {
      // TODO
    }
  },
  mounted() {
    this.getTeams()
  }
}
</script>

<style scoped>
.rounded-image {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
</style>