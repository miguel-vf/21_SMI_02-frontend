<template>
  <div class="vertical-center">
  <div class="inner-block">
    <div class="vue-tempalte">
        <form name="form" @submit.prevent="handleSignup">
          <h3>Register</h3>

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

            <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/login">Login</router-link>
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
  name: 'Register',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      errors: {}
    };
  },
  methods: {    
     handleSignup() {
      this.loading = true;

      if (this.user.username && this.user.password) {
        try {
          // Register
          this.$store.dispatch('auth/register', this.user);
          this.$router.push('/me');
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