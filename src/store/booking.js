import { postAsync } from "../services/apiFacade";

const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`bookings`, body);
    commit("SAVE_BOOKING", Booking.data);
  }
};

const mutations = {
  SAVE_BOOKING(state, data) {
    state.booking = data;
  }
};

const state = {
  booking: {}
};

export default {
  state,
  actions,
  mutations
};
