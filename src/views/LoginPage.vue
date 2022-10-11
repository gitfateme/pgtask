<script>
import { useAuthStore } from "../stores/login.js";

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    submit() {
      if (this.username) {
        this.authStore.username = this.username;
      }
      this.$router.push("/home");
    },
  },
};
</script>
<template>
  <div class="login-main">
    <div class="container">
      <div class="row justify-content-center align-items-center login-row">
        <div class="col-12 col-md-6 login-wrapper p-4">
          <h1 class="text-end heading1">ورود به پرتال اینترنتی</h1>
          <p class="text-end">لطفا وارد پنل کاربری خود شوید</p>
          <form class="text-end" @submit.stop.prevent="submit">
            <div class="input-group mb-3 flex-row-reverse">
              <span
                class="input-group-text addon1-style rounded-0"
                id="basic-addon1"
              >
              </span>
              <input
                type="text"
                class="form-control rounded-0 text-end"
                placeholder="نام کاربری"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="username"
              />
            </div>
            <div class="input-group mb-3 flex-row-reverse">
              <span
                class="input-group-text addon1-style rounded-0"
                id="basic-addon1"
              >
              </span>
              <input
                type="password"
                class="form-control rounded-0 text-end"
                placeholder="رمز عبور"
                aria-label="Password"
                aria-describedby="basic-addon1"
                v-model="password"
              />
            </div>
            <button type="submit" class="btn btn-success mx-3 px-5">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.heading1 {
  font-size: 24px;
}
.login-main {
  background-color: #e4e5e6;
}
.login-wrapper {
  background-color: white;
  border: 1px solid #c8ced3;
}
.login-row {
  height: 100vh;
}

.addon1-style {
  width: 20px;
}
</style>
