<template>
  <v-app>
    <router-link to="/">Book a desk</router-link>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  created: function() {
    var url = "./env/config.json";
    axios
      .get(url)
      .then(response => {
        axios.defaults.baseURL = `${response.data.base_api_url}/`;
      })
      .catch(() => {});
  },
  data: () => ({
    //
  })
};
</script>
