import Vuex from "vuex";
import Vue from "vue";
import booking from "./booking";
import config from "./config";
import error from "./error";
import offices from "./offices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalTvCount: 10 // The TV inventory
  },
  modules: {
    booking,
    config,
    error,
    offices    
  }
});
