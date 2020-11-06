import { postAsync } from "../services/apiFacade";

const actions = {
  async reserveOffice({ commit }) {
    const url = "http://localhost:5000/reserveOffice";
    const office = await postAsync(url);
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
