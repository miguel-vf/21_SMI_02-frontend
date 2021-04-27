<template>
   <div class="me">
    <h1>Me</h1>
      <hr/>
    <div class>
      <form name="form" @submit.prevent="handleLogout">
        <div>
          <button :disabled="loading">
            <span>Logout</span>            
          </button>
        </div>
        <div>
          <div v-if="message" role="alert">{{ message }}</div>
        </div>
      </form>
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
        if (this.user.username && this.user.password) {
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
}
</script>

<style>
</style>