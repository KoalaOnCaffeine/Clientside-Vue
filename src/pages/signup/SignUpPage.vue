<template>
  <v-app>
    <TopBar/>
    <v-spacer/>
    <v-container>
      <v-col>
        <v-row>
          <v-spacer/>
          <v-text-field :rules=usernameRules
                        label="Username"
                        v-model="username"
                        outlined
                        prepend-icon="mdi-account">
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field :rules=emailRules
                        label="Email"
                        v-model="email"
                        outlined
                        prepend-icon="mdi-email">
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'" :rules=passwordRules
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        v-model="password"
                        outlined
                        prepend-icon="mdi-key"
                        @click:append="showPassword ^= true">
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field
              :rules=dateOfBirthRules label="Date of birth"
              v-model="dateOfBirth"
              outlined
              prepend-icon="mdi-calendar"
              type="date">
          </v-text-field>
          <v-spacer/>
        </v-row>
        <v-row>
          <v-spacer/>
          <v-btn @click="submitSignup(username, email, password, dateOfBirth)">Sign up</v-btn>
          <v-spacer/>
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
  methods: {
    submitSignup: (username, email, password, dateOfBirth) => {
      alert(`${username} ${email} ${password} ${dateOfBirth}`)
    }
  },
  data: () => ({

    username: '',
    email: '',
    password: '',
    dateOfBirth: '',

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