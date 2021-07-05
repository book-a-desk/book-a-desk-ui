import { shallowMount, createLocalVue } from "@vue/test-utils";

import BadCardAvailability from "@/components/BadCardAvailability.vue";


import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadCardAvailability.vue", () => {
  let wrapper;
  const propId = "1";
  const propValue = 10;
  const propTitle = "available";

    beforeEach(() => {
        wrapper = shallowMount(BadCardAvailability, {
        propsData: {
            id: propId,
            title: propTitle,
            value: propValue,
        }
        });
    });

  it("should render v-card", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.exists()).toBe(true);
  });

  it("should pass [id] prop", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.attributes("id")).toBe('card-availability-' + propId);
  });

  it("should pass [title] prop", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.text()).toContain("available");
  });

  it("should pass [value] prop", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.text()).toContain("10");
  });

});
