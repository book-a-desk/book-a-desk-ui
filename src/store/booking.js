import { postAsync } from "../services/apiFacade";
import { getBaseApiUrl } from "./base-api-url";

const actions = {
  async book({ commit }, body) {
    const Booking = await postAsync(`${getBaseApiUrl()}/bookings`, body);
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
