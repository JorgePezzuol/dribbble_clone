<template>
  <div>asdassadsa</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("userModule", ["user"]),
  },
  methods: {},
  mounted() {
    console.log(this.user);
  },
};
</script>
