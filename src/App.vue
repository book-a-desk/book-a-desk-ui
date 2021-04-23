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
    var url = "./env/config.json";
    axios
      .get(url)
      .then(response => {
        axios.defaults.baseURL = `${response.data.base_api_url}/`;
        this.configLoaded = true;
      })
      .catch(() => {});
  },
  data() {
      return {
        configLoaded: false,
      };
    },
};
</script>
