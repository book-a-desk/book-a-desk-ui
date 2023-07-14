export default {
    oidc: {
      clientId: '0oa9ao1iozmurnsLk5d7',
      issuer: 'https://dev-05054243.okta.com/oauth2/default',
      redirectUri: window.location.origin + '/login/callback',
      pkce: true,
      scopes: ['openid', 'profile', 'email']
    }
  }
