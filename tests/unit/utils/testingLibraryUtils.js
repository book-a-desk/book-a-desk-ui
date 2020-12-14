// from https://github.com/testing-library/vue-testing-library/blob/master/src/__tests__/vuetify.js

// Custom container to integrate Vuetify with Vue Testing Library.
// Vuetify requires you to wrap your app with a v-app component that provides
// a <div data-app="true"> node.
import { render } from "@testing-library/vue";
import Vuetify from "vuetify";

export const renderWithVuetify = (component, options, callback) => {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return render(
    component,
    {
      container: document.body.appendChild(root),
      // for Vuetify components that use the $vuetify instance property
      vuetify: new Vuetify(),
      stubs: ["router-link", "router-view"],
      ...options
    },
    callback
  );
};
