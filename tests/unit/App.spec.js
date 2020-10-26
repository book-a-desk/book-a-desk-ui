import { shallowMount } from "@vue/test-utils";

import App from "@/App";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Component App.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });
});
