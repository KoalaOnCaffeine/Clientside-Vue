<template>
  <v-app>
    <TopBar/>
    <v-spacer/>
    <v-container>
      <v-col>
        <v-row>
          <!-- Add in the prepend icon for the username field -->
          <v-text-field :rules=usernameRules label="Username" prepend-icon="account">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field :rules=usernameRules label="Email" prepend-icon="mdi-email">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field :rules=usernameRules label="Password" prepend-icon="mdi-key">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field :rules=usernameRules label="Date of birth" prepend-inner="calendar">
          </v-text-field>
        </v-row>
      </v-col>
    </v-container>
    <v-spacer/>
    <v-spacer/>

  </v-app>
</template>

<script>

import TopBar from '../../common-components/TopBar.vue';

export default {
  name: 'SignUpPage',
  components: {TopBar},
  data: () => ({
    usernameRules: [
      value => !!value || 'Username is required', // Value must be present
      // Check for a valid email
    ],
    emailRules: [],
    passwordRules: [],
    dateOfBirthRules: []
  })
}
</script>

<style scoped>

</style>