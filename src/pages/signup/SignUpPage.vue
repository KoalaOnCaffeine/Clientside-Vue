<template>
  <v-app>
    <TopBar/>
    <v-spacer/>
    <h1 class="align-self-center">Sign up</h1>
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
              autofocus
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
        <v-row class="mt-6">
          <v-spacer/>
          <p :hidden="!error" class="red--text">{{ error }}</p>
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
  return 0 < username.length && username.length <= 20;
}

function usernameOnlyValidChars(username) {
  for (let index = 0; index < username.length; index++) {
    let charCode = username.charCodeAt(index);
    if (!isValidUsernameCharacter(charCode)) return false;
  }
  return true;
}

// EMAIL

// https://www.w3resource.com/javascript/form/email-validation.php

function isValidEmail(email) {
  return emailContainsValidUsername(email) && emailContainsValidDomain(email);
}

function emailContainsValidUsername(email) {
  if (email.length === 0) return false; // Must have a character there
  let domainStart = email.indexOf('@');
  // Get the string from the start to the @, exclusive. If there is no @, go to the end of the string
  let username = email.substr(0, domainStart === -1 ? email.length : domainStart);

  /*
  Matches:
  - The start of a string
  - A large group of characters, followed by a dot, all of this any amount of times (to make sure a dot isn't the first character)
  - The same large group of characters at least once (to ensure the dot wasn't the last character)
  - The end of a string
  */
  return /^([-!#$%&'*/=?^`{|}_"+A-Za-z0-9]+\.)*[-!#$%&'*/=?^`{|}_"+A-Za-z0-9]+$/.test(username);
}

function emailContainsValidDomain(email) {
  // this method needs something of the form @x.y to just validate the domain, regardless of any other part
  if (email.length < 4) return false;
  let domainStart = email.indexOf('@');
  if (domainStart === -1) return false; // No @ was found
  let domain = email.substr(domainStart + 1); // Get a new string, starting after the @ (safe since we have >=4 chars)

  /*
  Matches:
  - The start of a string
  - Alphanumeric characters, then optionally a hyphen or dot, all of this any amount of times
  - An alphanumeric character (so it doesn't end with a hyphen or dot, and must be at least 1 character long)
  - A dot
  - 2 or alphanumeric characters
  - The end of a string
   */

  return /^([A-Za-z0-9]+[-.]?)*[A-Za-z0-9]\.[A-Za-z0-9]{2,}$/.test(domain);
}

// PASSWORD

// Password must contain a lowercase, capital, punctuation, number, and be at least 7 characters long
function isValidPassword(password) {
  return containsLowerCase(password)
      && containsCapital(password)
      && containsPunctuation(password)
      && containsDigit(password)
      && passwordIsValidLength(password);
}

// Password must contain a lowercase letter, which is any letter whose lowercase is itself
function containsLowerCase(password) {
  for (let character of password) {
    if (isLetter(character.charCodeAt(0)) && character.toLowerCase() === character) return true;
  }
  return false;
}

// Password must contain a capital letter, which is any letter whose uppercase is itself
function containsCapital(password) {
  for (let character of password) {
    if (isLetter(character.charCodeAt(0)) && character.toUpperCase() === character) return true;
  }
  return false;
}

// Password must contain punctuation, which is anything satisfying !isLetter and !isDigit
function containsPunctuation(password) {
  for (let index = 0; index < password.length; index++) {
    let charCode = password.charCodeAt(index);
    if (!isLetter(charCode) && !isDigit(charCode)) return true; // Not a letter or a digit, so it is 'punctuation'
  }
}

// Password must contain a digit, which is anything satisfying the isDigit function
function containsDigit(password) {
  for (let index = 0; index < password.length; index++) {
    let charCode = password.charCodeAt(index);
    if (isDigit(charCode)) return true;
  }
  return false;
}

// Password must be at least 7 characters long
function passwordIsValidLength(password) {
  return password.length >= 7;
}

// DATE OF BIRTH

// Date of birth must put the user's age between 13 and 150 both inclusive
function isValidDateOfBirth(dateOfBirth) {
  const date = Date.parse(dateOfBirth)
  return dateIsOldEnough(date) && dateIsYoungEnough(date);
}

// Whether the year of the date at the current time minus the birthdate is, relative to 1970, larger than or equal to 13
function dateIsOldEnough(date) {
  const offsetDate = new Date(new Date().getTime() - date);
  return offsetDate.getFullYear() - 1970 >= 13
}

// Whether the year of the date at the current time, minus the birthdate is, relative to 1970, less than or equal to 150
function dateIsYoungEnough(date) {
  const offsetDate = new Date(new Date().getTime() - date);
  return offsetDate.getFullYear() - 1970 <= 150;
}

/*
Accepted character code ranges:
a-z = 97-122
A-Z = 65-90
_ = 95
 */

function isValidUsernameCharacter(charCode) {
  if (isLetter(charCode)) return true;
  return charCode === 95;
}

// Checks whether the character code is in between the character codes for a and z, or A and Z (all inclusive)
function isLetter(charCode) {
  if (97 <= charCode && charCode <= 122) return true;
  if (65 <= charCode && charCode <= 90) return true;
  return false;
}

// Checks whether the character code is between the character codes for 0 and 9 (both inclusive)
function isDigit(charCode) {
  return '0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0)
}

export default {
  name: 'SignUpPage',
  components: {TopBar},
  methods: {
    submitSignup: function (username, email, password, dateOfBirth) {

      if (!isValidUsername(username) || !isValidEmail(email) || !isValidPassword(password) || !isValidDateOfBirth(dateOfBirth)) {
        this.error = 'Invalid details!'
        return
      }

      fetch('/api/accounts/create', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          dateOfBirth: dateOfBirth
        })
      }).then(res => {
        if (res.status !== 200) {
          this.error = res.status === 409 ? 'An account with that username or email already exists!' : 'Invalid details!'
          return
        }
        res.text().then(text => JSON.parse(text)).then(json => {
          const data = json['data']
          const token = data['token']
          localStorage.setItem('AuthToken', token)
          document.location.href = "/dashboard/"
        })
      })
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
    error: '',

    showPassword: false,
    usernameRules: [
      value => !!value || 'Username is required', // Value must be present
      value => usernameIsValidLength(value) || 'Max length of 20 characters',
      value => usernameOnlyValidChars(value) || 'Username can only contain characters, number and underscores'
      // Check for a valid email
    ],
    emailRules: [
      // Validate email
      value => !!value || 'Email is required',
      value => emailContainsValidUsername(value) || 'Email must contain a valid username',
      value => emailContainsValidDomain(value) || 'Email must contain a valid domain',
    ],
    passwordRules: [
      // Validate password
      value => !!value || 'Password is required',
      value => containsLowerCase(value) || 'Password must contain a lowercase letter',
      value => containsCapital(value) || 'Password must contain a capital letter',
      value => containsPunctuation(value) || 'Password must contain punctuation',
      value => containsDigit(value) || 'Password must contain a digit',
      value => passwordIsValidLength(value) || 'Password must be at least 7 characters'
    ],
    dateOfBirthRules: [
      value => !!value || 'Date of birth is required',
      value => dateIsOldEnough(Date.parse(value)) || 'You must be at least 13 years old',
      value => dateIsYoungEnough(Date.parse(value)) || 'You must be younger than 150 years old'
      // Validate date of birth
    ]
  })
}
</script>

<style scoped>

.v-text-field {
  width: 15%;
}

h1 {
  font-size: xxx-large;
}

</style>