<template>
<div class="vertical-center">
<div class="inner-block-videos">
  <div class="videos">
  <h2>This is a service for short videos.</h2>
  <h4>To upload a video, please sign in.</h4>
  <Video v-for="(video, index) in videos" :key="index" :video="video" />
  </div>
  <div class="credits">
    <h5>Credits: Nuria Álvarez González and Miguel Villanueva Fernández</h5>
  </div>
</div>
</div>
</template>

<script>
import videoService from '../services/video-service'
import Video from '../components/Video'

export default {
    name: "Videos",
    components: {
      Video
    },
    props: {
      video: Object
    },
    data() {
      return {
          // State of the component
          videos: []
      }
    },
    created() {
      videoService.getAll()
        .then(videos => this.videos = videos.data) //depends on the backend, in which data gives us the get() (in the books example is an array)
    }
}
</script>

<style>
</style>