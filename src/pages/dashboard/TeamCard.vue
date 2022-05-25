<template>
  <v-card class="ma-4" height="400" max-height="75%" max-width="75%" outlined width="400">
    <CardHeader :description="description" :image="image" :loaded-members="loadedMembers" :name="name"/>
    <!-- Project list -->
    <v-container style="text-align: center; height: 65%">
      <!-- 3 rows -->
      <v-row v-for="i in 3" :key="i" class="text-left">
        <!-- Each with 2 columns -->
        <v-col v-for="j in 2" :key=j cols="6">
          {{ 2 * (i - 1) + (j - 1) }}
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