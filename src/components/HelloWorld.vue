<template>
  <div class="hello">
    <Video :video="video" />
  </div>
</template>

<script>
import Video from './Video.vue'

export default {
  name: 'HelloWorld',
  components: {
    Video // Register a component
  },
  props: {
    msg: String
  },
  data() {
    return {
      video: {
        title: "Video title (I don't know, maybe name?)",
        author: "Video author (user)",
        cover: "/covers/default.png"
      }
    }
  }
}
</script>