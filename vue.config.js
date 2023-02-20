module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000"
      }
    }
  },
  transpileDependencies: ["vuetify"],
  publicPath: `/${process.env.VUE_APP_SHA1 || ""}`,
  configureWebpack: {
    plugins: []
  }
};
