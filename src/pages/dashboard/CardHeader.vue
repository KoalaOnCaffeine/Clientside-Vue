<template>
  <div>
    <v-card-title style="position:absolute;">{{ name }}</v-card-title>
    <v-img :src="image" class="rounded-image" height="100" style="opacity: 45%"></v-img>
    <!-- Description and user icons -->
    <v-container>
      <v-row>
        <!-- Description -->
        <v-col cols="8">
          <v-card-text>
            {{ description }}
          </v-card-text>
        </v-col>
        <!-- User icons -->
        <v-col cols="4">
          <v-container>
            <v-row>
              <v-col v-for="i in Math.min(loadedMembers.length, 3)" :key="i" cols="3">
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
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: ['name', 'description', 'image', 'loadedMembers'],
  methods: {
    redirectToProfile: function (id) {
      document.location.href = `/profile/${id}/`
    },
  }
}
</script>

<style scoped>
.rounded-image {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
</style>