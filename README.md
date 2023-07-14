# book-a-desk-ui

## Project setup
```
npm install
```

### Compililation for development
__( provides the functionality of hot reloading )__
```
npm run serve
```

### Compililation and minification for production
```
npm run build
```

### Inject values to configure backend api url
__( .env.local is by default ignored by git )__
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
