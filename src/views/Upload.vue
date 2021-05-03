<template>
<div class="vertical-center">
<div class="inner-block-videos">
  <div class="vue-tempalte">
    <h1>Upload</h1>
       <hr/>
    <div class>
      <form name="form" @submit.prevent="handleUpload">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            v-model="video.title"            
            type="text"
            name="title"
                class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label for="author">Author (username)</label>
          <input
            v-model="video.author"            
            type="text"
            name="author"
                class="form-control form-control-lg"
          /> 
        </div>
        <div class="form-group">
          <label for="description">Description (optional)</label>
          <input
            v-model="video.description"            
            type="text"
            name="description"
                class="form-control form-control-lg"
          /> 
        </div>
        <div>
          <label for="file">Video file upload</label>
          <input
            type="file"
            class="file-upload"
            @change="onFileChange" />
        </div>
        <div>
          <button :disabled="!this.selectedFile || uploading"  class="btn btn-dark btn-lg btn-block">
            <span>Upload</span>            
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
import Video from '../models/video-model.js';
import videoService from '../services/video-service.js';

export default {
  name: "Upload",
  components: {
  },
  data() {
    return {
      message: "",
      selectedFile: "",
      video: new Video('', ''),
      uploading: false,
    };
  },
  methods: {
    onFileChange(e) {
      this.selectedFile = e.target.files[0];
    },
    async handleUpload() {
      this.loading = true;

      // All fields are mandatory
      if (this.video.title && this.video.author && this.selectedFile) {        
        try {
          // Create the video
          const response = await videoService.create(this.video);
          // Upload the video file
          await videoService.upload(response.data.id, this.selectedFile);
          await this.$router.push('/');
        }
        catch (error) {
          this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        }
      }
    },
  }
};
</script>

<style>
</style>