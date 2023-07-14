import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import BookingForm from "@/components/BookingForm.vue";
import BadTextInput from "@/components/BadTextInput.vue";
import BadContainedButton from "@/components/BadContainedButton.vue";
import BadDatePicker from "@/components/BadDatePicker.vue";
import BadComboBox from "@/components/BadComboBox.vue"
import Availabilities from "@/components/Availabilities.vue"
import BadMessage from "@/components/BadMessage.vue"
import flushPromises from "flush-promises"
import MockAxios from 'axios' 
import Vuex from "vuex";
import moment from 'moment'

Vue.component('BadTextInput', BadTextInput)
Vue.component('BadContainedButton', BadContainedButton)
Vue.component('BadDatePicker', BadDatePicker)
Vue.component('BadComboBox', BadComboBox)
Vue.component('Availabilities', Availabilities)
Vue.component('BadMessage', BadMessage)


const localVue = createLocalVue();

localVue.use(Vuex);
let idToken = JSON.stringify(
    {
        idToken: {
            value: ""
        }
    })
localStorage.setItem("okta-token-storage", idToken)
describe("Component BookingForm.vue", () => {

  let wrapper;
  let mockStore;

  beforeEach(() => {
    MockAxios.get.mockResolvedValue({ data: {items:[{id: "1", name: "office1"}, {id: "2", name: "office2"}] } });
    MockAxios.post.mockResolvedValue();

    mockStore = { dispatch: jest.fn() }
      
    Vue.prototype.authState = {
        isAuthenticated: true
    }

    Vue.prototype.$auth = {
        getUser() {
            return "Sergio Herrero";
        }
    }    

    wrapper = shallowMount(BookingForm, {
      propsData: {
          authState: { isAuthenticated: true }
      },
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
    
  it("should render `Availabilities` component", () => {
    expect(wrapper.findComponent(Availabilities).exists()).toBe(true);
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
    expect(button.attributes("label")).toBe("Book a desk");
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
    let headers = {
      headers: {
         Authorization: "Bearer "
      }
    }
    expect(MockAxios.get).toHaveBeenCalledWith("offices", headers);
    expect(MockAxios.post).toHaveBeenCalledWith(
       "/bookings",
       { 
         office: { 
             id: "1"
           },
         date: "2020-12-31",
         user: {
             email: "me@me.com"
         }
       },
       headers
    );
    })

    it("should show a warning message on booking", async () => {

        await flushPromises();

        await wrapper.findComponent(BadContainedButton).props().click();

        expect(wrapper.vm.isWarningShownOnBooking).toBe(true);
    })

    it("should show a result message on booking", async () => {
        const bookingResultTitle = "User Had Booked Before";
        const bookingResultMessage = "The office is already booked out at 11/11/2021 for user EmailAddress \"dummy@broadsign.com\"";

        MockAxios.post.mockRejectedValue({ response: {data: {title: bookingResultTitle, details: bookingResultMessage}}});

        await flushPromises();

        await wrapper.findComponent(BadContainedButton).props().click();

        expect(wrapper.vm.isMessageShownOnBooking).toBe(true);
        expect(wrapper.vm.bookingResultTitle).toBe(bookingResultTitle);
        expect(wrapper.vm.bookingResultMessage).toBe(`Something went wrong with the booking: ${bookingResultMessage}`);
    })
});
