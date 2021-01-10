const state = {
  alert: {
    type: null,
    message: null,
  },
};

const actions = {
  success(context, message) {
    context.commit("SUCCESS", message);
  },
  error(context, message) {
    context.commit("ERROR", message);
  },
  clear(context) {
    context.commit("CLEAR");
  },
};

const mutations = {
  SUCCESS(state, message) {
    state.alert.type = "is-success";
    state.alert.message = message;
  },
  ERROR(state, message) {
    state.alert.type = "is-danger";
    state.alert.message = message;
  },
  CLEAR(state) {
    state.alert.type = null;
    state.alert.message = null;
  },
};

export const alertModule = {
  namespaced: true,
  state,
  actions,
  mutations,
};
