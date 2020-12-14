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
    const textFields = underTest.findAllComponents({ name: "bad-text-input" });
    expect(textFields.length).toBe(3);

    expect(textFields.at(0).attributes("label")).toBe("Office ID");
    expect(textFields.at(1).attributes("label")).toBe("Booking Date");
    expect(textFields.at(2).attributes("label")).toBe("Email");
  });

  it("should render a button", () => {
    const button = underTest.findComponent({ name: "bad-contained-button" });
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
      const button = underTest.findComponent({ name: "bad-contained-button" });

      textFields.at(0).vm.$emit("input", "Montreal");
      textFields.at(1).vm.$emit("input", "2020-12-31");
      textFields.at(2).vm.$emit("input", "me@me.com");

      await button.props().click();

      expect(actions.book).toHaveBeenCalled();
    });
  });
});
