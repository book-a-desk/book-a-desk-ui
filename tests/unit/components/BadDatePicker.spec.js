import { shallowMount, createLocalVue } from "@vue/test-utils";

import BadDatePicker from "@/components/BadDatePicker.vue";

import Vuex from "vuex";

import moment from 'moment'

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadDatePicker.vue", () => {
  let underTest;
  let initialValue = "Initial value"

  beforeEach(() => {
    underTest = shallowMount(BadDatePicker, {
      propsData: {
        value: initialValue
      }
    });
  });

  it("should render v-date-picker", () => {
    const datePicker = underTest.findComponent({ name: "v-date-picker" });
    expect(datePicker.exists()).toBe(true);
  });

  it("should pass [value] prop", () => {
    const datePicker = underTest.findComponent({ name: "v-date-picker" });
    expect(datePicker.props().value).toEqual(initialValue);
  });  

  it("should set the minimum date to tomorrow", () => {
    expect(
      underTest.findComponent({ name: "v-date-picker" }).props().min
    ).toEqual(moment().add(1, 'days').format('YYYY-MM-DD'));
  });

});
