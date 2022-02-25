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
touch .env.local
npm run serve
```
### Content of .env.local file (ignored by git)
```
PORT=<front-end port>
VUE_APP_BASE_API_URL=<api-url>
VUE_APP_DOMAIN_NAME=domain.com
```


### Lints and fixes files
```
npm run lint
```

### Run Storybook locally
```
npm run storybook
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
