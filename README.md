# book-a-desk-ui

## Project setup
_( Note: you have to use node v16 or the `openssl legacy provider` option in node, newer versions provide:  
`export NODE_OPTIONS=--openssl-legacy-provider` )_

```
npm install
```

### Compilation for development
_( Provides the functionality of hot reloading )_
```
npm run serve
```

### Compilation and minification for production
```
npm run build
```

### Inject values to configure backend api url
_( `.env.local` is by default ignored by git )_
```
touch .env.local
echo "PORT=<front-end port>"            >> .env.local
echo "VUE_APP_BASE_API_URL=<api-url>"   >> .env.local
echo "VUE_APP_DOMAIN_NAME=domain.com"   >> .env.local

npm run serve
```

### Linting
```
npm run lint
```

### Run Storybook locally
```
npm run storybook
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
