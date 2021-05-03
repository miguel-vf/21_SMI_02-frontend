<template>
    <div class="video">
      <div class="box-video">
        <p>
            <strong class="video-title">{{ video.title }}</strong>
        <br>@{{ video.author }}
        </p>
        <img :src="`${baseURL}${video.thumbnail}`" alt="Video thumbnail" v-show="!showVideo" v-on:click="showVideo=true">
        <div class="player" v-show="showVideo">
          <video :src="`${baseURL}${video.file}`" data-dashjs-player="" controls="true"></video>
        </div>
        <p>{{ video.description }}
        </p>
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
        baseURL: Config.mediaURL,
        showVideo: false
          // State of the component
      }
    }
  }
</script>

<style>
</style>
