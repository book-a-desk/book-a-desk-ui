const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
      },
    }
  },
  transpileDependencies: ["vuetify"],
  publicPath: `/${process.env.VUE_APP_SHA1 || ''}`,
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          patterns: [
            {
              from: path.resolve(__dirname, "env/config.json"),
              to: path.resolve(__dirname, "dist/env")
            }
          ]
        }
      ])
    ]
  }
}