<template>
  <v-card outlined>
    <CardHeader :description="description" :image="image" :loaded-members="loadedMembers" :name="name"/>
    <!-- Project list -->
    <v-container class="text-left" style="height: 65%">
      Projects
      <v-row>
        <v-col clas="text-left">
          <v-col v-for="i in 3" :key="i" :class="'pl-2 pr-2 pt-3 pb-3' + (i === 1 ? ' mt-5' : '')">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div>
                  <v-icon v-bind="attrs" v-on="on">mdi-clipboard-text</v-icon>
                  Project {{ i }}
                </div>
              </template>
              <span>Project {{ i }}</span>
            </v-tooltip>
          </v-col>
        </v-col>
        <v-col clas="text-left">
          <v-col v-for="i in 3" :key="i" :class="'pl-2 pr-2 pt-3 pb-3' + (i === 1 ? ' mt-5' : '')">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div>
                  <v-icon v-bind="attrs" v-on="on">mdi-clipboard-text</v-icon>
                  Project {{ i }}
                </div>
              </template>
              <span>{{ i }}</span>
            </v-tooltip>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import CardHeader from "@/pages/dashboard/CardHeader";

export default {
  name: "TeamCard",
  components: {CardHeader},
  props: ['id', 'name', 'description', 'image', 'members', 'projects'],
  data: () => ({
    loadedMembers: [
      {'id': '0123456789', 'name': 'elizabeth olsen'},
      {'id': '0123456777', 'name': 'chris hemsworth'},
      {'id': '0123456777', 'name': 'rafe cameron'}],
    loadedProjects: [
      {name: 'Test Project', description: 'Test description'}
    ]
  }),
  methods: {
    loadMembers: function () {
      // Load 3 user accounts from the team
      for (let i in Math.min(3, this.members.length)) {
        fetch(`/api/accounts/${this.members[i]}`).then(res => {
          // If the request was a success, set the loaded member to the member json response
          if (res.status !== 200) {
            this.loadedMembers[i] = res.json()
          }
        })
      }
    },
    loadProjects: function () {
      // Todo implement
    }
  },
  mounted() {
    this.loadMembers()
    this.loadProjects()
  }
}
</script>


<style scoped>

</style>