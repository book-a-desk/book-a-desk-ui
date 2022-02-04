import { createRouter, createWebHistory } from 'vue-router'
import auth from '../auth'
import BookingForm from "@/components/BookingForm";

const router = createRouter({
  history: createWebHistory(__dirname),
  routes: [
    { path: '/', component: BookingForm,
      beforeEnter (to, from, next) {
        requireAuth(next)
      }
    },
    { path: '/login/callback', 
      beforeEnter (to, from, next) {
        auth.login(handleLoginResult)
        next()
      }
    },
    { path: '/logout',
      beforeEnter () {
        auth.logout()
      }
    },
    {path: '*', redirect: '/'}
  ]
})

function handleLoginResult(isloggedIn) {
  if (!isloggedIn) {
    this.error = true
  } else {
    this.$router.replace(this.$route.query.redirect || '/')
  }
}

function requireAuth (next) {
    auth.isLoggedIn().then(async isLoggedIn => {
        if (!isLoggedIn)
            await auth.login(handleLoginResult)
        else next()
    })
}

export default router;