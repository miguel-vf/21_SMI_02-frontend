<template>
    <div class="video">
      <div class="box">
        <img :src="`${video.cover}`" alt="Video cover">
        <p>
            <strong>{{ video.title }}</strong>
        <br>
            {{ video.author }}
        </p>
      </div>
    </div>  
</template>

<script>
  export default {
    name: "Video",    
    props: {
      video: Object
    },
    data() {
      return {
          // State of the component
      }
    }
  }
</script>

<style scoped>
.box {
  max-width: 60%;
  padding-bottom: 15px;
  border-radius: 5px;
  border-color: darkgrey;
  margin: 5px auto;
}

img {
  border-radius: 5px;
}

</style>
