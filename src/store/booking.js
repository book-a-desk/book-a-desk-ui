import {getAsync, postAsync} from "../services/apiFacade";


const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`bookings`, body);
    commit("SAVE_BOOKING", Booking.data);
  },
  async getBookings({ commit }, payload) {
    const url = `/bookings?date=${payload.date}&office=${payload.officeId}`;
    const response = await getAsync(url);
    commit("GET_BOOKINGS", response.data.items);
  }
};

const mutations = {
  SAVE_BOOKING(state, data) {
    state.booking = data;
  },
  GET_BOOKINGS(state, data) {
    state.dateAndOfficeBookings = data;
  },
};

const state = {
  booking: {},
  dateAndOfficeBookings: []
};

const getters = {
  dateAndOfficeBookings(state) {
    return state.dateAndOfficeBookings;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
};
