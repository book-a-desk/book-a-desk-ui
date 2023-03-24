import {getAsync, postAsync} from "../services/apiFacade";


const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`bookings`, body);
    commit("SAVE_BOOKING", Booking.data);
  },
  async getBookings({ commit }, payload) {
    const url = `/bookings?email=${payload.email}&date=${payload.date}`;
    const response = await getAsync(url);
    commit("GET_BOOKINGS", response.data.items);
  }
};

const mutations = {
  SAVE_BOOKING(state, data) {
    state.booking = data;
  },
  GET_BOOKINGS(state, data) {
    state.bookings = data;
  },
};

const state = {
  booking: {},
  bookings: []
};

const getters = {
  bookings(state) {
    return state.bookings;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
};
