import Vue from 'vue'
import Vuetify from 'vuetify'
import { options } from '@/plugins/vuetify' 
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators';

Vue.use(Vuetify)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const vuetify = new Vuetify(options)

export const decorators = [
  (story, context) => {
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    })
  },

  withVuetify
]
