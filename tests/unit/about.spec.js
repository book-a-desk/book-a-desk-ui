import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  it("renders About page without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders header text", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toMatch("This is an about page");
  });
});
