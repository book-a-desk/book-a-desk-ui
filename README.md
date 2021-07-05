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
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
