import "vuetify/styles";
import { createVuetify } from "vuetify";

export const options = {
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#4596FF",
        secondary: "#b0bec5",
        accent: "#FB48CD",
        error: "#b71c1c"
      }
    }
  }
};

export default createVuetify(options);
