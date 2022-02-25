const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
    ],
  "framework": "@storybook/vue",

  webpackFinal: async (config, { configType }) => {

    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true,
            },
            prependData: "@import '@/styles/variables.scss'",
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}