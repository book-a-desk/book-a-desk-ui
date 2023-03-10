import { postAsync } from "../services/apiFacade";
import { getToken } from "../auth"

const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`bookings`, body, getToken());
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
