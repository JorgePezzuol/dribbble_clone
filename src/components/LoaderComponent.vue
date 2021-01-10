<template>
  <div class="preloader" v-if="loader.isLoading">
    <img src="@/assets/loader.gif" alt="loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Loader",
  data() {
    return {};
  },
  computed: {
    ...mapState("loadingModule", ["loader"]),
  },
};
</script>

<style scoped>
.preloader {
  z-index: 99999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.75);
}
.preloader img {
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
