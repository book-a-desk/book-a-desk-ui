import { shallowMount, createLocalVue } from "@vue/test-utils";

import BookingForm from "@/components/BookingForm.vue";

import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BookingForm.vue", () => {
  let underTest;

  beforeEach(() => {
    underTest = shallowMount(BookingForm);
  });

  it("should render 3 text-fields", () => {
    const textFields = underTest.findAllComponents({ name: "v-text-field" });
    expect(textFields.length).toBe(3);

    expect(textFields.at(0).attributes("label")).toBe("Office ID");
    expect(textFields.at(1).attributes("label")).toBe("Booking Date");
    expect(textFields.at(2).attributes("label")).toBe("Email Address");
  });

  it("should render a button", () => {
    const button = underTest.findComponent({ name: "bad-contained-button" });
    expect(button.exists()).toBe(true);

    expect(button.attributes("id")).toBe("btnBook");
    expect(button.text()).toBe("Book");
  });

  // describe('filling and submitting the "form"', () => {
  //   let actions;
  //   let store;
  //
  //   beforeEach(() => {
  //     actions = {
  //       addBooking: jest.fn(),
  //     };
  //     store = new Vuex.Store({
  //       actions
  //     });
  //     underTest = shallowMount(BookingForm, { store, localVue })
  //
  //   });
  //
  //   it("should submit values from the inputs", () => {
  //     const officeIDInput = underTest.find("#officeID");
  //     officeIDInput.element.value = 666;
  //     officeIDInput.trigger("change");
  //
  //     const emailInput = underTest.find("#email");
  //     emailInput.element.value = "email";
  //     emailInput.trigger("change");
  //
  //     const dateInput = underTest.find("#bookingDate");
  //     dateInput.element.value = "2020-11-04";
  //     dateInput.trigger("change");
  //
  //     const button = underTest.find('#btnBook');
  //
  //     underTest.find("#btnBook").trigger("click");
  //
  //     expect(actions.addBooking).toHaveBeenCalled();
  //   });
  // });
});
