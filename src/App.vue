<template>
  <v-app v-if="configLoaded">
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  created() {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    this.configLoaded = true;
  }
};
</script>
