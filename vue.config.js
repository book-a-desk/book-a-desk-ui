const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
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
