import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { renderWithVuetify } from "./utils/testingLibraryUtils";

const localVue = createLocalVue();
localVue.use(VueRouter);

import App from "@/App";

describe("Component App.vue", () => {
  it("can be tested using @vue/test-util", () => {
    const wrapper = shallowMount(App, { localVue });
    const links = wrapper.findAllComponents({ name: "router-link" });
    expect(links.at(0).text()).toEqual("Book a desk");
  });

  it("can be tested using @testing-library/vue", () => {
    const { getByText } = renderWithVuetify(App);
    const linkElt = getByText(/^Book a desk$/);
    expect(linkElt).not.toBe(undefined);
  });
});
