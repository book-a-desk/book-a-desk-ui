import { getAsync } from "../services/apiFacade";

//Actions
const actions = {
    async getFlags({ commit }) {
        let { data } = await getAsync("/flags");
        commit("SAVE_FLAGS", data);
        return Promise.resolve();
    }
};

// Mutations
const mutations = {
    SAVE_FLAGS(state, flags) {
        state.flags = flags;
    }
};

// Initial state
const state = {
    flags: {}
};

// Getters
const getters = {
    isLocalHost: () => window.location.hostname === "localhost"
};

export default {
    state,
    getters,
    actions,
    mutations
};
