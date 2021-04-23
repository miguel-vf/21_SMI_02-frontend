import Service from './service.js';
import authHeader from './auth-header';

const resource = 'videos'; //There should be a route /videos in the backend (check it), we request it using http

export default {
    getAll() {
        return Service.get(resource); //http get request
    },

    create(data) {
        return Service.post(resource, data, { headers: authHeader() });
    },

    upload(videoId, filename) {
        const formData = new FormData();
        formData.append("videoFile", filename);  // appending file
        return Service.post(`${resource}/${videoId}/upload`, formData, { headers: authHeader() })
    }
}