import _axios from "../plugins/axios";
import { router } from "@/router";

const state = {
  user: JSON.parse(localStorage.getItem("user")) ?? {},
};

const actions = {
  create(context, user) {
    _axios
      .post("/api/user/create", JSON.stringify(user))
      .then((response) => {
        context.commit("CREATE_OR_LOGIN_SUCCESS", response.data.user);
        context.dispatch("alertModule/success", response.data.message, {
          root: true,
        });
        router.push("/home");
      })
      .catch((error) => {
        context.commit("CREATE_OR_LOGIN_ERROR");
        context.dispatch("alertModule/error", error, { root: true });
      });
  },
  login(context, user) {
    _axios
      .post("/api/user/login", JSON.stringify(user))
      .then((response) => {
        context.commit("CREATE_OR_LOGIN_SUCCESS", response.data.user);
        context.dispatch("alertModule/success", response.data.message, {
          root: true,
        });
        router.push("/home");
      })
      .catch((error) => {
        context.commit("CREATE_OR_LOGIN_ERROR");
        context.dispatch("alertModule/error", error, { root: true });
      });
  },
  logout(context) {
    localStorage.removeItem("user");
    context.commit("CREATE_OR_LOGIN_ERROR");
  },
};

const mutations = {
  CREATE_OR_LOGIN_SUCCESS(state, user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  CREATE_OR_LOGIN_ERROR(state) {
    state.user = {};
  },
};

export const userModule = {
  namespaced: true,
  state,
  actions,
  mutations,
};
