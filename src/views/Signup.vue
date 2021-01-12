<template>
  <div class="columns is-gapless">
    <div class="column is-4 p-6" style="background-color: #f2d184">
      <section class="hero is-fullheight p-5" style="background-color: #f2d184">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">dribbble {{ user.name }}</h1>
            <h1 class="title">Discover the world's top Designers & creatives.</h1>
            <figure class="image">
              <img src="@/assets/signup-image.png" />
            </figure>
          </div>
        </div>
        <div class="hero-foot ml-5">
          <div class="container">
            <p>Art by <a class="link" href="#">Peter Tarka</a></p>
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
                  Already a member?<a href="/signin" class="ml-1 link">Sign in</a>
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div class="hero-body">
          <div class="columns is-centered">
            <div class="column is-half p-6">
              <form @submit.prevent="createUser">
                <div class="container half-container">
                  <h1 class="title">Sign up to Dribbble</h1>
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
                  <div class="columns">
                    <div class="field column">
                      <label class="label">Name</label>
                      <div class="control">
                        <validation-provider rules="required" v-slot="{ errors }">
                          <input
                            v-model="userForm.name"
                            class="input test"
                            type="text"
                            placeholder=""
                          />
                          <span class="input-error">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>
                    </div>

                    <div class="field column">
                      <label class="label">Username</label>
                      <div class="control">
                        <validation-provider rules="required" v-slot="{ errors }">
                          <input
                            v-model="userForm.username"
                            class="input"
                            type="text"
                            placeholder=""
                          />
                          <span class="input-error">{{ errors[0] }}</span>
                        </validation-provider>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                      <validation-provider rules="required|email" v-slot="{ errors }">
                        <input
                          v-model="userForm.email"
                          class="input"
                          type="email"
                          placeholder=""
                        />
                        <span class="input-error">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                      <validation-provider rules="required|min:6" v-slot="{ errors }">
                        <input
                          v-model="userForm.password"
                          class="input"
                          type="password"
                          placeholder="6+ characters"
                        />
                        <span class="input-error">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input v-model="hasAcceptedTerms" type="checkbox" />
                        Creating an account means you’re okay with our
                        <a href="#">Terms of Service, Privacy Policy</a>, and our default
                        <a href="#">Notification Settings.</a>
                      </label>
                    </div>
                  </div>
                  <button
                    :disabled="!isEmpty"
                    type="submit"
                    style="background-color: #f082ac; max-width: 200px"
                    class="button mt-5 has-text-white is-fullwidth has-text-weight-bold"
                  >
                    Create Account
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
import { ValidationProvider, extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

// https://logaretm.github.io/vee-validate/guide/basics.html#rule-arguments
extend("email", {
  ...email,
  message: "E-mail not valid",
});
extend("min", {
  ...min,
  message: "Must be at least 6 characters long",
});
extend("required", {
  ...required,
  message: "This field is required",
});

export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      userForm: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      hasAcceptedTerms: false,
    };
  },
  computed: {
    ...mapState("userModule", ["user"]),
    isEmpty() {
      return (
        Object.values(this.userForm).every((x) => x !== null && x !== "") &&
        this.hasAcceptedTerms
      );
    },
  },
  methods: {
    ...mapActions("userModule", ["create"]),
    ...mapActions("loadingModule", ["toggleLoading"]),
    createUser(e) {
      this.toggleLoading();
      this.create(this.userForm);
      this.toggleLoading();
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
