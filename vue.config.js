const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  proxy: {
    "/api/*": {
        target: "http://localhost:5000",
        secure: false
      }
  },
  transpileDependencies: ["vuetify"],
  publicPath: `/${process.env.VUE_APP_SHA1 || ''}`,
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "env/config.json"),
          to: path.resolve(__dirname, "dist/env")
        }
      ]),
    ],
  }
};