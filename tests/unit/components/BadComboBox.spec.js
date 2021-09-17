import { shallowMount, createLocalVue } from "@vue/test-utils";

import BadComboBox from "@/components/BadComboBox.vue";

import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadComboBox.vue", () => {
  let wrapper;
  const propValue = {value: "1", text: "one"};
  const propId = "1";
  const propItems = [{"id": 1}, {"id": 2}];
  const propItemText = "Item Text";
  const propItemValue = "Item value";
  const propHint = "Hint Text";
  const propPersistentHint = true;

  beforeEach(() => {
    wrapper = shallowMount(BadComboBox, {
      propsData: {
        value: propValue,
        id: propId,
        items: propItems,
        itemText: propItemText,
        itemValue: propItemValue,
        hint: propHint,
        persistentHint: propPersistentHint
      }
    });
  });

  it("should render v-date-picker", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.exists()).toBe(true);
  });

  it("should pass [value] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().value).toEqual(propValue);
  });  

  it("should pass [id] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().id).toEqual("combobox-" + propId);
  });  

  it("should pass [items] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().items).toEqual(propItems);
  });  

  it("should pass [itemText] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().itemText).toEqual(propItemText);
  });  

  it("should pass [itemValue] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().itemValue).toEqual(propItemValue);
  });  

  it("should pass [hint] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().hint).toEqual(propHint);
  });  

  it("should pass [persistentHint] prop", () => {
    const comboBox = wrapper.findComponent({ name: "v-combobox" });
    expect(comboBox.props().persistentHint).toEqual(propPersistentHint);
  });  
});
