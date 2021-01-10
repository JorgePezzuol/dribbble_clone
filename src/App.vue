<template>
  <div id="app">
    <Loader />
    <Alert />
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/LoaderComponent";
import Alert from "./components/AlertComponent";
export default {
  components: {
    Loader,
    Alert,
  },
};
</script>
