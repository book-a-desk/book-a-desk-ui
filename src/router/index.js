import { createRouter, createWebHistory } from 'vue-router'
import auth from '../auth'

const router = createRouter({
  history: createWebHistory(__dirname),
  routes: [
    { path: '/auth/callback', component: auth.handleCallback()},
    { path: '/logout',
      beforeEnter () {
        auth.logout()
      }
    }
  ]
})

export default router;