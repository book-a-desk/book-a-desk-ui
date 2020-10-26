import { shallowMount } from "@vue/test-utils";

import { render } from "@testing-library/vue";

import App from "@/App";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Component App.vue", () => {
  it("can be tested using @vue/test-util", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });

  it("can be tested using @testing-library/vue", () => {
    const { getByAltText } = render(App);
    const imgEl = getByAltText("Vue logo");
    expect(imgEl.getAttribute("src")).toBe("./assets/logo.png");
  });
});
