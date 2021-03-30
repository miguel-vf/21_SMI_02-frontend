<template>
  <div class="videos">
  <h1>Videos</h1>
  <Video v-for="(video, index) in videos" :key="index" :video="video" />
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
      book: Object
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