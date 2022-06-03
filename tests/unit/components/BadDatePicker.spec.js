import { shallowMount, createLocalVue } from "@vue/test-utils";
import BadDatePicker from "@/components/BadDatePicker.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadDatePicker.vue", () => {
  let underTest;

  beforeEach(() => {
    underTest = shallowMount(BadDatePicker, {});
  });

  it("should render v-date-picker", () => {
    const datePicker = underTest.findComponent({ name: "v-date-picker" });
    expect(datePicker.exists()).toBe(true);
  });

  it("should update [selectedBookingDate] when a date is selected", () => {
    const datePicker = underTest.findComponent({ name: "v-date-picker" });
    datePicker.vm.$emit("input", "2021-07-31");
    expect(underTest.vm.selectedBookingDate).toEqual("2021-07-31");
  });
});
