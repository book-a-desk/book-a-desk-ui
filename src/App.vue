<template>
  <v-app v-if="configLoaded">
    <v-main>
      <router-view> </router-view>
    </v-main>
    <nav>
      <div>
        <router-link to="/" v-if="isLoggedIn">
          Login
        </router-link>
        <router-link to="/login/callback" v-if="isLoggedIn">
          Login Callback
        </router-link>
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
  created() {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;
    this.configLoaded = true;
    auth.onChange = isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    }
  },
  data() {
    return {
      configLoaded: false,
      isLoggedIn: auth.isLoggedIn(),
    };
  }
};
</script>