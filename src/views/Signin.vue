<template>
  <div class="columns is-gapless">
    <div class="column is-4 p-6" style="background-color: #f2d184">
      <section class="hero is-fullheight p-5" style="background-color: #f1cdd7">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">dribbble {{ user.name }}</h1>
            <h1 class="title">Discover the world's top Designers & creatives.</h1>
            <figure class="image">
              <img src="@/assets/signin-image.jpg" />
            </figure>
          </div>
        </div>
        <div class="hero-foot ml-5">
          <div class="container">
            <p>Art by <a class="link" href="#">Irina Valeeva</a></p>
          </div>
        </div>
      </section>
    </div>
    <div class="column is-8">
      <section class="hero p-3">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-end">
                <p class="navbar-item">
                  Not a memer?<a href="/signup" class="ml-1 link">Sign up now</a>
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div class="hero-body">
          <div class="columns is-centered">
            <div class="column is-half p-6">
              <form @submit.prevent="handleLogin">
                <div class="container">
                  <h1 class="title">Sign in to Dribbble</h1>
                  <div class="columns">
                    <div class="field column is-10">
                      <button class="button is-fullwidth is-link">
                        G Sign Up with Google
                      </button>
                    </div>
                    <div class="field column is-2">
                      <button
                        style="background-color: #f3f3f4"
                        class="button is-pulled-right"
                      >
                        t
                      </button>
                    </div>
                  </div>
                  <div class="columns is-vcentered">
                    <div class="column"><hr /></div>
                    <div style="max-width: 40px" class="column has-text-centered">Or</div>
                    <div class="column"><hr /></div>
                  </div>

                  <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                      <input
                        v-model="userForm.username"
                        class="input"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="field mt-5">
                    <label class="label">Password</label>
                    <div class="control">
                      <input
                        v-model="userForm.password"
                        class="input"
                        type="password"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    :disabled="!isEmpty"
                    style="background-color: #f082ac; max-width: 200px"
                    class="button mt-5 has-text-white is-fullwidth has-text-weight-bold"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required } from "vee-validate/dist/rules";

export default {
  data() {
    return {
      userForm: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("userModule", ["user"]),
    isEmpty() {
      return Object.values(this.userForm).every((x) => x !== null && x !== "");
    },
  },
  methods: {
    ...mapActions("userModule", ["login"]),
    handleLogin(e) {
      this.login(this.userForm);
    },
  },
};
</script>

<style scoped>
.input-error {
  color: red;
}
input[type="text"],
input[type="email"],
input[type="password"],
input[type="checkbox"] {
  background-color: #f3f3f4;
}
</style>
