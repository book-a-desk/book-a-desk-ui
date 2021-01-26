import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueRouter from "vue-router";
import BookingForm from "./components/BookingForm";

const routes = [{ path: "/", component: BookingForm }];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
