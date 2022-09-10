<template>
  <div>
    <v-app-bar app color="primary" dark elevate-on-scroll elevation="5" hide-on-scroll>

      <v-container>
        <v-row>
          <v-col cols="2">
            <v-btn class="text-capitalize" href="/dashboard" large text>Home</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="text-capitalize" href="/calendar" large text>Calendar</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="text-capitalize" href="/teams" large text>Teams</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="text-capitalize" href="/projects" large text>Projects</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="text-capitalize" href="/todo" large text>Todo</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="text-capitalize" large text>Name</v-btn>
            <v-btn icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'DashboardTopBar',
}
</script>

<style scoped>
.v-btn {
  font-size: 1.2rem;
}
</style>