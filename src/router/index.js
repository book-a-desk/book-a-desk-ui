import Vue from "vue";
import Router from "vue-router";
import auth from '../auth'
import BookingForm from "@/components/BookingForm";

Vue.use(Router);

let router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: BookingForm,
      name: "Bookings",
      // beforeEnter (to, from, next) {
      //   requireAuth(next)
      // }
    },
    { path: '/login/callback',
      name: "Login", component: BookingForm,
      // beforeEnter (to, from, next) {
      //   console.log("login callback");
      //   auth.login(handleLoginResult)
      //   next()
      // }
    },
    { path: '/logout',
      name: "Logout"
      // beforeEnter () {
      //   auth.logout()
      // }
    }
  ]
})
router.beforeEach((to, from, next) => {
  auth.isLoggedIn().then(async isLoggedIn => {
      console.log("loggedIn: ", isLoggedIn);
      if (!isLoggedIn)
          await auth.login(handleLoginResult)
      else next()
  })
})

function handleLoginResult(isloggedIn) {
  console.log("loginResult: ", isloggedIn)
  if (!isloggedIn) {
    this.error = true
  } else {
    this.$router.replace(this.$route.query.redirect || '/login/callback')
  }
}

// function requireAuth (next) {
//     auth.isLoggedIn().then(async isLoggedIn => {
//         if (!isLoggedIn)
//             await auth.login(handleLoginResult)
//         else next()
//     })
// }

export default router;