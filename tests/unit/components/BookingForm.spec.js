import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import BookingForm from "@/components/BookingForm.vue";
import BadTextInput from "@/components/BadTextInput.vue";
import BadContainedButton from "@/components/BadContainedButton.vue";
import BadDatePicker from "@/components/BadDatePicker.vue";
import BadComboBox from "@/components/BadComboBox.vue"
import flushPromises from "flush-promises"
import MockAxios from 'axios' 
import Vuex from "vuex";
import moment from 'moment'

Vue.component('BadTextInput', BadTextInput)
Vue.component('BadContainedButton', BadContainedButton)
Vue.component('BadDatePicker', BadDatePicker)
Vue.component('BadComboBox', BadComboBox)

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BookingForm.vue", () => {

  let wrapper;
  let mockStore;

  beforeEach(() => {
    MockAxios.get.mockResolvedValue({ data: [{id: "1", name: "office1"}, {id: "2", name: "office2"}] });

    mockStore = { dispatch: jest.fn() }

    wrapper = shallowMount(BookingForm, {
    mocks: {
      $store: mockStore 
    }
  });
  });

  afterEach(() => {
    jest.resetAllMocks()
  });

  it("should render `TextInput` component", () => {
    expect(wrapper.findComponent(BadTextInput).exists()).toBe(true);
  });

  it("should render `ComboBox` component", async() => {
    expect(wrapper.findComponent(BadComboBox).exists()).toBe(true);
  });

  it("should render `DatePicker` component", () => {
    expect(wrapper.findComponent(BadDatePicker).exists()).toBe(true);
  });
    
  it("should set the minimum date of the date picker to tomorrow", () => {
    expect(
      wrapper.findComponent(BadDatePicker).props().min
    ).toEqual(moment().add(1, 'days').format('YYYY-MM-DD'));
  });

  it("should render a button", () => {
    const button = wrapper.findComponent(BadContainedButton);
    expect(button.exists()).toBe(true);

    expect(button.attributes("id")).toBe("btnBook");
    expect(button.text()).toBe("Book a desk");
  });

  it("should submit values from the inputs", async () => {

    wrapper
     .findComponent(BadTextInput)
     .vm.$emit("input", "me@me.com");  

    wrapper
     .findComponent(BadDatePicker)
     .vm.$emit("input", "2020-12-31");

     await flushPromises();

     await wrapper.findComponent(BadContainedButton).props().click();

     expect(MockAxios.get).toHaveBeenCalledTimes(1);
     expect(MockAxios.get).toHaveBeenCalledWith("offices");
     expect(mockStore.dispatch).toHaveBeenCalledWith(
       "book" , 
       { 
         office: { 
             id: "1" 
           },
         date: "2020-12-31",
         user: { 
             email: "me@me.com" 
         } 
       });
   })
});
