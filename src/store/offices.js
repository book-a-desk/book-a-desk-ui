import {getAsync} from "../services/apiFacade";

const actions = {
    async getOffices({ commit }) {
        const url = `/offices`;
        const response = await getAsync(url);
        commit("GET_OFFICES", response.data.items);
    }
};

const mutations = {
    GET_OFFICES(state, data) {
        state.offices = data;
    },
};

const state = {
    offices: []
};

const getters = {
    offices(state) {
        return state.offices;
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
};
