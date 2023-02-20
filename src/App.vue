<template>
  <v-app v-if="configLoaded">
    <div>
      <bad-contained-button
        v-if="authState && authState.isAuthenticated"
        :click="logout"
        label="Sign out"
      ></bad-contained-button>
      <bad-contained-button
        v-else
        :click="login"
        label="Sign in"
      ></bad-contained-button>
    </div>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import BadContainedButton from "./components/BadContainedButton.vue";

export default {
  components: { BadContainedButton },
  name: "App",
  async created() {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    await this.getFlags();
    this.configLoaded = true;
  },
  data() {
    return {
      configLoaded: false
    };
  },
  methods: {
    async getFlags() {
      await this.$store.dispatch("getFlags");
    },
    login() {
      this.$auth.signInWithRedirect("/"); //{ originalUri: '/' }
    },
    async logout() {
      await this.$auth.signOut();
    }
  }
};
</script>
