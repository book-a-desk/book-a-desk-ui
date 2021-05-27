const { debug } = require("console");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: '${process.env.BASE_API_URL}',
      },
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