import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#4596FF',
        secondary: '#b0bec5',
        accent: '#FB48CD',
        error: '#b71c1c'
      },
    },
  },
});
