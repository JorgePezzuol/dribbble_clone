import _axios from "../plugins/axios";
import { router } from "@/router";

const getters = {
  isLoggedIn(state) {
    return state.user === {} ? false : true;
  },
};

const state = {
  user: JSON.parse(localStorage.getItem("user")) ?? {},
};

const actions = {
  create(context, user) {
    _axios
      .post("/api/user/create", JSON.stringify(user))
      .then((response) => {
        context.commit("SET_USER", JSON.stringify(response.data));
        context.dispatch("alertModule/success", response.data.message, {
          root: true,
        });
        router.push("/home");
      })
      .catch((error) => {
        context.dispatch("alertModule/error", error, { root: true });
      });
  },
  login(context, user) {
    _axios
      .post("/api/user/login", JSON.stringify(user))
      .then((response) => {
        context.commit("SET_USER", JSON.stringify(response.data));
        context.dispatch("alertModule/success", response.data.message, {
          root: true,
        });
        router.push("/home");
      })
      .catch((error) => {
        context.dispatch("alertModule/error", error, { root: true });
      });
  },
  logout(context) {
    context.commit("LOGOUT");
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    localStorage.setItem("user", user);
  },
  LOGOUT(state) {
    state.user = {};
    localStorage.removeItem("user");
  },
};

export const userModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
