import { postAsync } from "../services/apiFacade";

const actions = {
  async addBooking({ commit }, body) {
    const url = `http://localhost:5000/bookings`;
    const Booking = await postAsync(url, body);
    commit("SAVE_Booked_OFFICE", Booking.data);
  }
};

const mutations = {
  SAVE_Booked_OFFICE(state, data) {
    state.bookedOffice = data;
  }
};

const state = {
  bookedOffice: {}
};

export default {
  state,
  actions,
  mutations
};
