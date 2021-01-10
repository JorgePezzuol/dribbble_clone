import Vue from "vue";
import Vuex from "vuex";

import { userModule } from "./user.module";
import { alertModule } from "./alert.module";
import { loadingModule } from "./loading.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userModule,
    alertModule,
    loadingModule
  },
});
