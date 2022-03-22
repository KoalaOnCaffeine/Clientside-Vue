<template>
  <v-app-bar app color="primary" dark elevate-on-scroll hide-on-scroll elevation="5">
    <div class="d-flex align-center">
      <v-btn href="/" text>
        <v-icon>mdi-image</v-icon>
        <span class="shrink mt-1 ml-3">Name</span>
      </v-btn>
    </div>

    <v-spacer/>

    <v-btn href="/sign-up" text>
      <span class="mr-2">Sign up</span>
    </v-btn>

    <v-btn href="/log-in" text>
      <span class="mr-2">Log in</span>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'TopBar'
}
</script>