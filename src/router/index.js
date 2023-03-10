import { createRouter, createWebHistory } from "vue-router";
// import { OktaAuth } from "@okta/okta-auth-js";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import BookingForm from "@/components/BookingForm.vue";
// import oktaConfig from "../okta.config";

// const oktaAuth = new OktaAuth(oktaConfig.oidc);

// app.use(Router);
// app.use(OktaVue, { oktaAuth });

// const router = new Router({
//   mode: 'history',
//   routes: [
//
//   ]
// });
const routes = [
  {
    path: "/",
    component: BookingForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login/callback",
    component: LoginCallback
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(navigationGuard);
export default router;
