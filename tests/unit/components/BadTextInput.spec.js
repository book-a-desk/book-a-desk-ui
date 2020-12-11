import { shallowMount, createLocalVue } from "@vue/test-utils";

import BadTextInput from "@/components/BadTextInput.vue";

import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadTextInput.vue", () => {
  let underTest;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    underTest = shallowMount(BadTextInput, {
      propsData: {
        change: onChange,
        label: "I am input",
        placeholder: "Type something",
        id: "Input1",
        value: "Initial value"
      }
    });
  });

  it("should render v-text-field", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.exists()).toBe(true);
  });

  it("should pass value prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().value).toEqual("Initial value");
  });

  it("should pass label prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().label).toEqual("I am input");
  });

  it("should pass id prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().id).toEqual("Input1");
  });

  it("should pass id prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().placeholder).toEqual("Type something");
  });

  it("should trigger `onChange` when value is changed", async () => {
    const textField = underTest.findComponent({ name: "v-text-field" });

    await textField.vm.$emit("change", { value: "New Value" });

    expect(onChange).toHaveBeenCalledWith({ value: "New Value" });
  });
});
