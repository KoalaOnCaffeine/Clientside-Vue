<template>
  <v-app>
    <TopBar/>
    <v-spacer/>
    <v-container>
      <v-col>
        <v-row>
          <v-text-field :rules=usernameRules
                        label="Username"
                        outlined
                        prepend-icon="mdi-account">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field :rules=emailRules
                        label="Email"
                        outlined
                        prepend-icon="mdi-email">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'" :rules=passwordRules
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        outlined
                        prepend-icon="mdi-key"
                        @click:append="showPassword ^= true">
          </v-text-field>
        </v-row>

        <v-row>
          <v-text-field
              :rules=dateOfBirthRules label="Date of birth"
              outlined
              prepend-icon="mdi-calendar"
              type="date">
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
    showPassword: false,
    usernameRules: [
      value => !!value || 'Username is required', // Value must be present
      // Check for a valid email
    ],
    emailRules: [
      // Validate email
      value => !!value || 'Email is required'
    ],
    passwordRules: [
      // Validate password
      value => !!value || 'Password is required'
    ],
    dateOfBirthRules: [
      value => !!value || 'Date of birth is required'
      // Validate date of birth
    ]
  })
}
</script>

<style scoped>

</style>