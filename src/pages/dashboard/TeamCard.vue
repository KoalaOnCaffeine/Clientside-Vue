<template>
  <v-card height="500" width="500">
    <v-card-title style="position:absolute;">{{ name }}</v-card-title>
    <v-img :src="image" height="100" style="opacity: 35%"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "TeamCard",
  props: ['name', 'image', 'description', 'members', 'projects', 'id'],
}
</script>

<style scoped>

</style>