<template>
  <v-card class="ma-4" height="400" max-height="75%" max-width="75%" outlined width="400">
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
      {name: 'asd', description: 'dkjlljsjkl'}
    ]
  }),
  mounted() {
    this.getTeam()
  }
}
</script>


<style scoped>

</style>