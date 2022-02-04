const OktaAuth = require('@okta/okta-auth-js').OktaAuth
const authClient = new OktaAuth({
  issuer: 'https://${process.env.VUE_APP_BASE_URL}',
  clientId: '${proces.env.VUE_APP_CLIENTID}',
  scopes: ['openid', 'email', 'profile'],
  redirectUri: window.location.origin + '/login/callback'
})

export default {
  login (cb) {
    cb = arguments[arguments.length - 1]
    this.isLoggedIn().then(async isLoggedIn => {
      if (!isLoggedIn)
      {
        let transaction = await authClient.signIn({})
        
        if (transaction.status === 'SUCCESS') {
          let response = await authClient.token.getWithoutPrompt({
            responseType: ['id_token', 'token'],
            sessionToken: transaction.sessionToken,
          })
          localStorage.token = response.tokens.accessToken
          localStorage.idToken = response.tokens.idToken
          if (cb) cb(true)
          this.onChange(true)
        }
      }
      else
      {
        if (cb) cb(true)
        this.onChange(true)
      }
    }).catch(err => {
      console.error(err.message)
      if (cb) cb(false)
      this.onChange(false)
    })
  },

  getToken () {
    return localStorage.token
  },

  logout (cb) {
    delete localStorage.token
    delete localStorage.idToken
    if (cb) cb()
    this.onChange(false)
    return authClient.signOut()
  },

  isLoggedIn () {
    if (!authClient)
      return Promise.resolve(false);
    return authClient.isAuthenticated();
  },

  onChange () {
  },
}
