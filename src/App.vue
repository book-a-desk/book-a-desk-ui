<template>
  <v-app v-if="configLoaded">
    <v-main>
      <router-view> </router-view>
    </v-main>
    <nav>
      <div>
        <router-link to="/" v-if="loggedIn">
          Login
        </router-link>
        <router-link to="/login/callback" v-if="loggedIn">
          Login Callback
        </router-link>
        <a v-if="loggedIn" v-on:click="auth.logout()">
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
  created() {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    this.configLoaded = true;
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  },
  data() {
    return {
      configLoaded: false,
      loggedIn: auth.loggedIn(),
    };
  }
};
</script>