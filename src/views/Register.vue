<template>
  <div class="register">
    <h1>Register</h1>
      <hr/>
    <div class>
      <form name="form" @submit.prevent="handleSignup">
        <div>
          <label for="username">Username</label>
          <input
            v-model="user.username"            
            type="text"
            name="username"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="user.password"            
            type="password" 
            name="password"
          />
        </div>
        <div>
          <button :disabled="loading">
            <span>Register</span>            
          </button>
          <router-link to="/login">Login</router-link>
        </div>
        <div>
          <div v-if="message" role="alert">{{ message }}</div>
        </div>
      </form>
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