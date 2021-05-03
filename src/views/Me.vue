<template>
  <div class="vertical-center">
  <div class="inner-block">
   <div class="vue-tempalte">
    <h1>User managment</h1>
      <hr/>
    <div class>
      <form name="form" @submit.prevent="handleLogout">
        <div>
          <h5>Do you want to logout?</h5>
          <button :disabled="loading" class="btn btn-dark btn-lg btn-block">
            <span>Logout</span>            
          </button>
        </div>
        <div>
          <div v-if="message" role="alert">{{ message }}</div>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
    name: "Me",
    props: {
      video: Object
    },
    data() {
      return {
          // State of the component
      };
    },
    methods: {
      handleLogout(){
        this.loading = false;
        
        try {
          // Logout
          this.$store.dispatch('auth/logout');
          this.$router.push('/');
        }
        catch ( error) {
          this.loading = true;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        
      }
    }


    }
}
</script>

<style>
</style>