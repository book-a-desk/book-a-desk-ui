<template>
  <v-app v-if="configLoaded">
    <v-main>
      <router-view> </router-view>
    </v-main>
    <nav>
      <div>
        <router-link to="/" v-if="isLoggedIn"/>
        <a v-if="isLoggedIn" v-on:click="auth.logout()">
          Logout
        </a>
      </div>
    </nav>
    <div id="content">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import auth from './auth';
import axios from "axios";

export default {
  name: "App",
  async created() {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    await this.getFlags();
    this.configLoaded = true;
    auth.onChange = isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    }
  },
  data() {
    return {
      configLoaded: false,
      isLoggedIn: false,
    };
  },
  methods: {
    async getFlags() {
      await this.$store.dispatch("getFlags");
    }
  }
};
</script>