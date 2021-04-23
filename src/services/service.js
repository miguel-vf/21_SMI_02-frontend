import axios from 'axios';

const BACKEND_IP = process.env.BACKEND_IP || 'localhost'; //change for the real IP address of the backend
const BACKEND_PORT = process.env.BACKEND_PORT || '3000';
const baseURL = `http://${BACKEND_IP}:${BACKEND_PORT}`;

export default axios.create({
    baseURL,
});