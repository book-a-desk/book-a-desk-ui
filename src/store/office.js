import { postAsync } from "../services/apiFacade";

const actions = {
  async reserveOffice({ commit }, body) {
    const url = `bookings`;
    const office = await postAsync(url, body);
    commit("SAVE_RESERVED_OFFICE", office.data);
  }
};

const mutations = {
  SAVE_RESERVED_OFFICE(state, data) {
    state.reservedOffice = data;
  }
};

const state = {
  reservedOffice: {}
};

export default {
  state,
  actions,
  mutations
};
