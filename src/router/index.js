import auth from '../auth'
import BookingForm from "@/components/BookingForm";

const routes = [
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
  }
];

const router = new VueRouter({
  routes
});

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