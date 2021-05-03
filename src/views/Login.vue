<template>

<div class="vertical-center">
<div class="inner-block">
    <div class="vue-tempalte">
        <form name="form" @submit.prevent="handleLogin">
          <h3>Login</h3>

           <div class="form-group">
              <label for="username">Username</label>
              <input
                v-model="user.username"            
                type="text"
                name="username"
                class="form-control form-control-lg"
              />
           </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="user.password"            
                  type="password" 
                  name="password"
                  class="form-control form-control-lg"
                />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/register">Not yet registered?</router-link>
            </p>
            <div>
              <div v-if="message" role="alert">{{ message }}</div>
            </div>
        </form>
    </div>
</div>
</div>
</template>

<script>
import User from '../models/user-model.js';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      errors: {}
    };
  },
  methods: {    
    async handleLogin() {
      this.loading = true;

      if (this.user.username && this.user.password) {
        try {
          // Login
          await this.$store.dispatch('auth/login', this.user);
          await this.$router.push('/me');
        }
        catch ( error) {
          this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        }
      }
    }
  }
};
</script>


<style>
</style>