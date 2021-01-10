import Vue from "vue";
import axios from "./plugins/axios";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

// Vue.axios.get("/api/test").then((response) => {
//   console.log(response.data);
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
