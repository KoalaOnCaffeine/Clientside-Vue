<template>
  <v-app>
    <TopBar/>

    <v-app>
      <TopBar/>
      <v-spacer/>
      <h1 class="align-self-center">Log in</h1>
      <v-spacer/>
      <v-container>
        <v-col>
          <v-row>
            <v-spacer/>
            <v-text-field
                label="Username"
                v-model="username"
                outlined
                prepend-icon="mdi-account"
                autofocus>
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
                @click:append="showPassword ^= true">
            </v-text-field>
            <v-spacer/>
          </v-row>

          <v-row>
            <v-spacer/>
            <v-btn @click="submitLogin(username, password)">Log in</v-btn>
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
  </v-app>
</template>

<script>
import TopBar from '../../common-components/TopBar.vue'

function submitLogin(username, password) {

  // If either the username or password is null, show the error message
  if (!username || !password) {
    this.error = 'You need to provide a username and password'
    return
  }

  fetch("/api/accounts/login", {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    })
  }).then(res => res.text()).then(text => {
    const obj = JSON.parse(text)
    const data = obj['data']
    const token = data['token']
    localStorage.setItem('AuthToken', token)
    document.location.href = '/dashboard/'
  })
}

export default {
  name: "LogInPage",
  components: {TopBar},
  data: () => ({
    showPassword: false,
    username: '',
    password: '',
    error: ''
  }),
  methods: {
    submitLogin: submitLogin
  }
}
</script>

<style scoped>

.v-text-field {
  width: 15%;
}

</style>