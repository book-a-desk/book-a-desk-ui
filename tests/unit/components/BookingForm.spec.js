import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import BookingForm from "@/components/BookingForm.vue";
import BadTextInput from "@/components/BadTextInput.vue";
import BadContainedButton from "@/components/BadContainedButton.vue";
import BadDatePicker from "@/components/BadDatePicker.vue";

import Vuex from "vuex";

import moment from 'moment'

Vue.component('BadTextInput', BadTextInput)
Vue.component('BadContainedButton', BadContainedButton)
Vue.component('BadDatePicker', BadDatePicker)

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BookingForm.vue", () => {
  let underTest;

  beforeEach(() => {
    underTest = shallowMount(BookingForm);

  });

  it("should render 2 text-fields", () => {
    const textFields = underTest.findAllComponents(BadTextInput);
    expect(textFields.length).toBe(2);

    expect(textFields.at(0).attributes("label")).toBe("Office ID");
    expect(textFields.at(1).attributes("label")).toBe("Email");
  });

  it("should render `DatePicker` component", () => {
    expect(underTest.findComponent(BadDatePicker).exists()).toBe(
      true
    );
  });
    
  it("should set the minimum date of the date picker to tomorrow", () => {
    expect(
      underTest.findComponent(BadDatePicker).props().min
    ).toEqual(moment().add(1, 'days').format('YYYY-MM-DD'));
  });

  it("should render a button", () => {
    const button = underTest.findComponent(BadContainedButton);
    expect(button.exists()).toBe(true);

    expect(button.attributes("id")).toBe("btnBook");
    expect(button.text()).toBe("Book");
  });

  describe('filling and submitting the "form"', () => {
    let actions;
    let store;

    beforeEach(() => {
      actions = {
        book: jest.fn()
      };
      store = new Vuex.Store({
        actions
      });
      underTest = shallowMount(BookingForm, { store, localVue });
    });

    it("should submit values from the inputs", async () => {
      const textFields = underTest.findAllComponents({
        name: "bad-text-input"
      });
      const button = underTest.findComponent(BadContainedButton);

      textFields.at(0).vm.$emit("input", "Montreal");
      textFields.at(1).vm.$emit("input", "me@me.com");

      underTest
        .findComponent({ name: "bad-date-picker" })
        .vm.$emit("click", "2020-12-31");

      await button.props().click();

      expect(actions.book).toHaveBeenCalled();
    });
  });
});
