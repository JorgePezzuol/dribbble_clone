<template>
  <nav
    v-if="alert.message"
    :class="`navbar is-fixed-top notification ${alert.type} has-text-weight-bold is-size-4`"
  >
    {{ alert.message }}
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Alert",
  data() {
    return {};
  },
  computed: {
    ...mapState("alertModule", ["alert"]),
  },
  methods: {
    ...mapActions("alertModule", ["clear"]),
  },
  watch: {
    $route(to, from) {
      this.clear();
    },
  },
};
</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
.loader {
  height: 80px;
  width: 80px;
}
.is-active {
  opacity: 1;
  z-index: 1;
}
</style>
