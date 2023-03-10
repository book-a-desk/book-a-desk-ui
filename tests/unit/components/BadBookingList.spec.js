import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import BadBookingList from "@/components/BadBookingList.vue";
import moment from "moment";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadBookingList.vue", () => {
  let wrapper;
  const bookings = [
      {
          date: '2022-10-30T00:00:00'
      },
      {
          date: '2022-11-16T00:00:00'
      }
  ];

  beforeEach(() => {
    wrapper = shallowMount(BadBookingList, {
      propsData: {
        bookings: bookings
      }
    });
  });

  it("should render v-list", () => {
    const list = wrapper.findComponent({ name: "v-list" });
    expect(list.exists()).toBe(true);
  });

  it("should render 2 bad-booking-details", () => {
    expect(wrapper.findAllComponents({ name: "bad-booking-details" }).length).toBe(2)
  })
    
  it("should pass correct [day] prop to all bad-booking-details", () => {
    const bookingDetails1 = wrapper.findAllComponents({ name: "bad-booking-details" }).at(0);
    expect(bookingDetails1.props().day).toEqual(moment(bookings[0].date).date().toString());
    const bookingDetails2 = wrapper.findAllComponents({ name: "bad-booking-details" }).at(1);
    expect(bookingDetails2.props().day).toEqual(moment(bookings[1].date).date().toString());
  });

  it("should pass correct [month] prop to all bad-booking-details", () => {
    const bookingDetails1 = wrapper.findAllComponents({ name: "bad-booking-details" }).at(0);
    expect(bookingDetails1.props().month).toEqual(moment(bookings[0].date).format("MMMM"));
    const bookingDetails2 = wrapper.findAllComponents({ name: "bad-booking-details" }).at(1);
    expect(bookingDetails2.props().month).toEqual(moment(bookings[1].date).format("MMMM"));
  });
});
