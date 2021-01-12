import Vue from "vue";
import VueRouter from "vue-router";

import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Home from "../views/Home";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/signup",
      component: Signup,
    },

    {
      path: "/home",
      component: Home,
    },
    {
      path: "/signin",
      component: Signin
    },

    {
      path: "*",
      redirect: "/signup",
    },
  ],
});

router.beforeEach((to, from, next) => {

  const publicPages = ["/signin", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/signin");
  }

  if (loggedIn && to.path == "/signup" || loggedIn && to.path == "/signin") {
    return next("/home");
  }

  next();
});
