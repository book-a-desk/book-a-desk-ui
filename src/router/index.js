import { createRouter, createWebHistory } from 'vue-router'
import auth from '../auth'

const router = createRouter({
  history: createWebHistory(__dirname),
  routes: [
    { path: '/login/callback', component: auth.login(handleLoginResult)},
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

function handleLoginResult(isloggedIn) {
  if (!isloggedIn) {
    this.error = true
  } else {
    this.$router.replace(this.$route.query.redirect || '/')
  }
}

function requireAuth () {
    if (!auth.isLoggedIn()) 
        auth.login(handleLoginResult)
    else next();
}

export default router;