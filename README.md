# book-a-desk-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Inject environment variable to configure backend api url
```
npm install -g serve
export VUE_APP_BASE_API_URL=<api-url>
serve -s <build-directory> -l <port-to-deploy-on>
example:
serve -s dist -l 8080
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
