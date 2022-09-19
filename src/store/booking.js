import {getAsync, postAsync} from "../services/apiFacade";

const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`bookings`, body);
    commit("SAVE_BOOKING", Booking.data);
  },
  async getBookings({ commit }, payload) {
    const Booking = await getAsync(`bookings`, payload);
    commit("GET_BOOKINGS", Booking.data);
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
  bookings: [
    { day: '22', month: 'September' },
    { day: '30', month: 'October' },
    { day: '1', month: 'December' }
  ]
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
