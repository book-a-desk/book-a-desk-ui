import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Availabilities from "@/components/Availabilities.vue";
import BadCardAvailability from "@/components/BadCardAvailability.vue";
import Vuex from "vuex";

Vue.component('BadCardAvailability', BadCardAvailability);

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component Availabilities.vue", () => {
  let wrapper;
  const propTotal = 10;
  const propAvailable = 7;
  const propReserved = 3;

    beforeEach(() => {
        wrapper = shallowMount(Availabilities, {
        propsData: {
            total: propTotal,
            available: propAvailable,
            reserved: propReserved,
        }
        });
    });

  it("should render three bad-card-availability components", () => {
    const cards = wrapper.findAllComponents(BadCardAvailability);
    expect(cards).toHaveLength(3);  
  });
  it("should pass [total] prop to the first bad-card-availability component ", () => {
      const card = wrapper.findAllComponents(BadCardAvailability).at(0);
      expect(card.props().value).toEqual(10);  
  });
  it("should pass [available] prop to the second bad-card-availability component ", () => {
    const card = wrapper.findAllComponents(BadCardAvailability).at(1);
    expect(card.props().value).toEqual(7);  
  });
  it("should pass [reserved] prop to the third bad-card-availability component ", () => {
    const card = wrapper.findAllComponents(BadCardAvailability).at(2);
    expect(card.props().value).toEqual(3);  
  });
});
