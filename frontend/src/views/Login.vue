<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here (e.g. make an API call)
      // For the sake of simplicity, we'll just compare the email and password to hardcoded values
      if (
        this.email === "example@example.com" &&
        this.password === "password"
      ) {
        // If the login is successful, clear the form fields and navigate to the dashboard page
        this.email = "";
        this.password = "";
        this.$router.push("/dashboard");
      } else {
        // If the login fails, display an error message
        this.error = "Invalid email or password";
      }
    },
  },
};
</script>

<template>
  <Header />
  <div id="login-box" class="ui segment">
    <div id="search" class="ui teal segment">
      <div class="ui action input fluid">
        <a class="ui teal ribbon label">Login</a>
      </div>
    </div>
    <form class="ui form" @submit.prevent="login">
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button class="ui button" type="submit">Login</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped>
#login-box {
  width: 420px;
  margin: auto;
  margin-top: 70px;
}
.error {
  color: red;
}
</style>
