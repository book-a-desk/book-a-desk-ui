// Actions
const actions = {};

// Mutations
const mutations = {
  ADD_ERROR(state, error) {
    state.error = error;
  },
  ADD_ERROR_MESSAGE(state, error) {
    state.message = error;
  },
  REMOVE_ERROR(state) {
    state.message = "";
  }
};

// Initial state
const state = {
  message: ""
};

// Getters
const getters = {
  errorExists: state => state.message != ""
};

export default {
  state,
  getters,
  actions,
  mutations
};
