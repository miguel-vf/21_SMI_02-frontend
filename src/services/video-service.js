import Service from './service.js';

const resource = 'videos'; //There should be a route /videos in the backend (check it), we request it using http

export default {
    getAll() {
        return Service.get(resource); //http get request
    }
}