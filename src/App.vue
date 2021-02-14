<template>
  <div id="app">
    <Loader />
    <Alert />
    <Navbar v-if="this.isLoggedIn" />
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/utils/LoaderComponent";
import Alert from "./components/utils/AlertComponent";
import Navbar from "./components/auth/Navbar";
import { mapGetters } from "vuex";

export default {
  components: {
    Loader,
    Alert,
    Navbar,
  },
  computed: {
    ...mapGetters("userModule", ["isLoggedIn"]),
  },
};
</script>
