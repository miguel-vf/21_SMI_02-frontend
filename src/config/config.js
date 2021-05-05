const IP = process.env.BACKEND_IP || '192.168.1.231';
const mediaURL = `http://${IP}:8080`; //URL to access /videos and /images

module.exports = {
    mediaURL,
};