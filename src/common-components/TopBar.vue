<template>
  <v-app-bar app color="primary" dark elevate-on-scroll elevation="5"
             hide-on-scroll>
    <div class="d-flex align-center">
      <v-btn href="/home" text>
        <v-icon>mdi-image</v-icon>
        <span class="shrink mt-1 ml-3">Name</span>
      </v-btn>
    </div>

    <v-spacer/>

    <v-btn href="/signup" text>
      <span class="mr-2">Sign up</span>
    </v-btn>

    <v-btn href="/login" text>
      <span class="mr-2">Log in</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>