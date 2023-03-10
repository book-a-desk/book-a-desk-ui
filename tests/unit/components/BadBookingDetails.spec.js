import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import BadBookingDetails from "@/components/BadBookingDetails.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadBookingDetails.vue", () => {
  let wrapper;
  const day = "30";
  const month = "October";

  beforeEach(() => {
    wrapper = shallowMount(BadBookingDetails, {
      propsData: {
        day: day,
        month: month,
      }
    });
  });

  it("should render v-card", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.exists()).toBe(true);
  });

  it("should pass [day] prop", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.text()).toContain(day);
  });

  it("should pass [month] prop", () => {
    const card = wrapper.findComponent({ name: "v-card" });
    expect(card.text()).toContain(month.toUpperCase());
  });

});
