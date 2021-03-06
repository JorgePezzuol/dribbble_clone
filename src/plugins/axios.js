"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  //withCredentials: true, // Check cross-site Access-Control
  baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
  },
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    document.querySelector("#loading").style.display = "block";
    return config;
  },
  function(error) {
    document.querySelector("#loading").style.display = "none";
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    document.querySelector("#loading").style.display = "none";
    return response;
  },
  function(error) {
    document.querySelector("#loading").style.display = "none";
    // token expired
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default _axios;
