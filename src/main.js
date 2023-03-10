import { createApp } from "vue";
import App from "./App.vue";
import "@/plugins/register-components";
import vuetify from "@/plugins/vuetify";
import store from "./store";
import router from "./router";
import { OktaAuth } from "@okta/okta-auth-js";
import oktaConfig from "@/okta.config";
import OktaVue from "@okta/okta-vue";

const oktaAuth = new OktaAuth(oktaConfig.oidc);

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(OktaVue, { oktaAuth });

app.config.productionTip = false;

app.mount("#app");
