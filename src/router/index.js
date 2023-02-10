import Vue from 'vue'
import Router from 'vue-router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue, { LoginCallback, navigationGuard } from '@okta/okta-vue'
import BookingForm from '@/components/BookingForm'
import oktaConfig from '../okta.config'

const oktaAuth = new OktaAuth(oktaConfig.oidc)

Vue.use(Router)
Vue.use(OktaVue, { oktaAuth })

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BookingForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login/callback',
      component: LoginCallback
    }
  ]
})
router.beforeEach(navigationGuard)
export default router

