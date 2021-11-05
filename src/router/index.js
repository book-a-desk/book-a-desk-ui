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
    },
    {path: '*', redirect: '/',
     beforeEnter () {
         requireAuth
     }
    
    }
  ]
})

function requireAuth () {
    if (!auth.isLoggedIn()) 
        auth.login();
    else next();
}

export default router;