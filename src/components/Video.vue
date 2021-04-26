<template>
    <div class="video">
      <div class="box">
        <img :src="`${baseURL}${video.thumbnail}`" alt="Video thumbnail">
        <p>
            <strong>{{ video.title }}</strong>
        <br>
            {{ video.author }}
        </p>
        <div class="player">
          <video :src="`${baseURL}${video.file}`" data-dashjs-player="" autoplay="" controls="true"></video>
        </div>
      </div>
    </div>  
</template>

<script>
import Config from '../config/config'

  export default {
    name: "Video",    
    props: {
      video: Object
    },
    data() {
      return {
        baseURL: Config.mediaURL
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
  width: 300px;
  height: 168px;
}

</style>
