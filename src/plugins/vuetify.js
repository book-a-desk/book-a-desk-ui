import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export const options = {
  icons: {
      iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#ff0000',//'#4596FF',
        secondary: '#b0bec5',
        accent: '#FB48CD',
        error: '#b71c1c'
      },
    },
  },
}

export default new Vuetify(options)




