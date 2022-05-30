<template>
  <v-card class="ma-4" height="400" max-height="75%" max-width="75%" outlined width="400">
    <CardHeader :description="description" :image="image" :loaded-members="loadedMembers" :name="name"/>
    <v-container style="text-align: center; height: 65%">
      <v-row class="fill-height text-left">
        <v-col class="text-left">
          Recent Cards
          <v-col v-for="i in 3" :key="i" :class="'pl-2 pr-2 pt-3 pb-3' + (i===1 ? ' mt-5' : '')">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div>
                  <v-icon v-bind="attrs" v-on="on">mdi-clipboard-text</v-icon>
                  {{ loadedRecentCards[i - 1].name }}
                </div>
              </template>
              <span>{{ loadedRecentCards[i - 1].description }}</span>
            </v-tooltip>
          </v-col>
        </v-col>
        <v-divider class="ml-2 mr-2 mt-5" inset style="height: 75%" vertical/>
        <v-col class="text-left">
          Upcoming deadlines
          <v-col v-for="i in 3" :key="i" :class="'pl-2 pr-2 pt-3 pb-3' + (i===1 ? ' mt-5' : '')">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div>
                  <v-icon v-bind="attrs" v-on="on">mdi-clipboard-text</v-icon>
                  {{ loadedUpcomingCards[i - 1].name }}
                </div>
              </template>
              <span>{{ loadedUpcomingCards[i - 1].description }}</span>
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
  name: "ProjectCard",
  components: {CardHeader},
  props: ['id', 'name', 'description', 'image', 'members', 'cards'],
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
  })
}
</script>

<style scoped>

</style>