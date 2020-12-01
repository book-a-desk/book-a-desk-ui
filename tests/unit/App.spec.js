import { shallowMount } from "@vue/test-utils";
import { render } from "@testing-library/vue";

import Vuetify from "vuetify";

import App from "@/App";
import BookingForm from "@/components/BookingForm.vue";

// from https://github.com/testing-library/vue-testing-library/blob/master/src/__tests__/vuetify.js

// Custom container to integrate Vuetify with Vue Testing Library.
// Vuetify requires you to wrap your app with a v-app component that provides
// a <div data-app="true"> node.
const renderWithVuetify = (component, options, callback) => {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return render(
    component,
    {
      container: document.body.appendChild(root),
      // for Vuetify components that use the $vuetify instance property
      vuetify: new Vuetify(),
      ...options
    },
    callback
  );
};

describe("Component App.vue", () => {
  it("can be tested using @vue/test-util", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(BookingForm).exists()).toBe(true);
  });

  it("can be tested using @testing-library/vue", () => {
    const { getByText } = renderWithVuetify(App);
    const buttonEl = getByText(/^Book$/);
    expect(buttonEl).not.toBe(undefined);
  });
});
