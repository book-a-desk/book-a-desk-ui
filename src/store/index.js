import Vuex from "vuex";
import { createApp } from "vue";
import App from "../App.vue";
import booking from "./booking";
import config from "./config";
import error from "./error";

const app = createApp(App);
app.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10 // The TV inventory
  },
  modules: {
    error,
    booking,
    config
  }
});
