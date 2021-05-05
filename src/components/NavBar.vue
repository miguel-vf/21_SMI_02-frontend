<template>
  <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
    <div class="container">
      <ul class="nav navbar-nav flex-row float-left">
        <li class="nav-time"><img class="logo" src="../assets/logo.jpg" /></li>
        <li class="nav-item"><router-link class="btn btn-outline-primary" style="" to="/">Main page</router-link></li>
        <li class="nav-item"><router-link class="nav-link pr-3" to="upload">Upload</router-link></li>
        <li class="nav-item"><router-link class="nav-link pr-3" to="me">User managment</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

