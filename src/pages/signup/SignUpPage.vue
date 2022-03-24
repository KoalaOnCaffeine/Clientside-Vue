<template>
  <v-app>
    <TopBar/>
    <v-spacer/>
    <v-container>
      <v-col>
        <v-row>
          <v-spacer/>
          <v-text-field
              :rules=usernameRules
              label="Username"
              v-model="username"
              outlined
              :append-outer-icon="validUsername(username) ? 'mdi-check' : 'mdi-close'"
              prepend-icon="mdi-account">
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field
              label="Email"
              v-model="email"
              outlined
              prepend-icon="mdi-email"
              :append-outer-icon="validEmail(email) ? 'mdi-check' : 'mdi-close'"
              :rules=emailRules
          >
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              label="Password"
              outlined
              prepend-icon="mdi-key"
              :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
              :append-outer-icon="validPassword(password) ? 'mdi-check' : 'mdi-close'"
              :rules=passwordRules
              @click:append="showPassword ^= true">
          </v-text-field>
          <v-spacer/>
        </v-row>

        <v-row>
          <v-spacer/>
          <v-text-field
              v-model="dateOfBirth"
              outlined
              prepend-icon="mdi-calendar"
              :append-outer-icon="validDateOfBirth(dateOfBirth) ? 'mdi-check' : 'mdi-close'"
              :rules=dateOfBirthRules label="Date of birth"
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

// USERNAME

function isValidUsername(username) {
  return usernameIsValidLength(username) && usernameOnlyValidChars(username)
}

function usernameIsValidLength(username) {
  return username.length <= 20;
}

function usernameOnlyValidChars(username) {
  for (let index = 0; index < username.length; index++) {
    let charCode = username.charCodeAt(index);
    if (!isValidUsernameCharacter(charCode)) return false;
  }
  return true;
}

// EMAIL

function isValidEmail(email) {
  return !!email;
}

// PASSWORD

function isValidPassword(password) {
  return !!password;
}

// DATE OF BIRTH

function isValidDateOfBirth(dateOfBirth) {
  return !!dateOfBirth;
}

/*
Accepted character code ranges:
a-z = 97-122
A-Z = 65-90
_ = 95
 */

function isValidUsernameCharacter(charCode) {
  if (97 <= charCode && charCode <= 122) return true;
  if (65 <= charCode && charCode <= 90) return true;
  if (charCode === 95) return true;
  return false;
}

export default {
  name: 'SignUpPage',
  components: {TopBar},
  methods: {
    submitSignup: (username, email, password, dateOfBirth) => {
      alert(`${username} ${email} ${password} ${dateOfBirth}`)
    },
    validUsername: isValidUsername,
    validEmail: isValidEmail,
    validPassword: isValidPassword,
    validDateOfBirth: isValidDateOfBirth
  },
  data: () => ({

    username: '',
    email: '',
    password: '',
    dateOfBirth: '',

    showPassword: false,
    usernameRules: [
      value => !!value || 'Username is required', // Value must be present
      value => usernameIsValidLength(value) || 'Max length of 20 characters',
      value => usernameOnlyValidChars(value) || 'Username can only contain characters, number and underscores'
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

.v-text-field {
  width: 8.75%;
}

</style>