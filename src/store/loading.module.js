const state = {
  loader: {
    isLoading: false,
  },
};

const actions = {
    toggleLoading(context) {
        context.commit('TOGGLE_LOADING');
    }
};

const mutations = {
    TOGGLE_LOADING(state) {
        state.loader.isLoading = !state.loader.isLoading;
    }
};

export const loadingModule = {
  namespaced: true,
  state,
  actions,
  mutations,
};
