<template>
  <nav
    v-if="alert.message"
    :class="`navbar is-fixed-top notification ${alert.type} has-text-weight-bold is-size-4`"
  ></nav>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
