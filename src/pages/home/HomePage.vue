<template>
  <v-app>
    <TopBar/>

    <v-spacer/>
    <v-spacer/>

    <v-container>

      <v-row class="ma-xl-03 ma-lg-02 mt-16">
        <v-col class="ml-0 ml-lg-10 text-lg-left text-center align-self-center">
          <h1>Short description of the project</h1>
        </v-col>
        <v-col>
          <v-img :src=first_image_src contain height="500"/>
        </v-col>

      </v-row>

      <v-row class="ma-xl-03 ma-lg-02 mt-xs-16 mb-5">

        <v-col>
          <v-img :src=second_image_src contain height="500"/>
        </v-col>

        <v-col class="mr-0 mr-lg-10 text-lg-left text-center align-self-center">
          <h1>Another description of the project</h1>
        </v-col>

      </v-row>

    </v-container>
  </v-app>
</template>

<script>

import TopBar from "../../common-components/TopBar.vue";

export default {
  name: 'HomePage',

  components: {
    TopBar
  },

  data: () => ({
    first_image_src: "placeholder-image.png",
    second_image_src: "placeholder-image.png",
  }),
};
</script>
