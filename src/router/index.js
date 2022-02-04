import { createRouter, createWebHistory } from 'vue-router'
import auth from '../auth'

const router = createRouter({
  history: createWebHistory(__dirname),
  routes: [
    { path: '/login/callback', 
      beforeEnter () {
        auth.login(handleLoginResult)
      }
    },
    { path: '/logout',
      beforeEnter () {
        auth.logout()
      }
    },
    {path: '*', redirect: '/',
     beforeEnter () {
         requireAuth()
     }
    
    }
  ]
})

function handleLoginResult(isloggedIn) {
  if (!isloggedIn) {
    this.error = true
  } else {
    this.$router.replace(this.$route.query.redirect || '/').then(_ => {})
  }
}

function requireAuth () {
    auth.isLoggedIn().then(async isLoggedIn => {
        if (!isLoggedIn)
            await auth.login(handleLoginResult)
        else next()
    })
}

export default router;