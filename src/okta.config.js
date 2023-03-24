export default {
    oidc: {
      clientId: '0oa3x84ilfnELlXMp5d7',
      issuer: 'https://dev-97690496.okta.com/oauth2/default',
      redirectUri: window.location.origin + '/login/callback',
      pkce: true,
      scopes: ['openid', 'profile', 'email']
    }
  }
