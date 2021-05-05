import axios from 'axios';
import dotenv from 'dotenv';

const BACKEND_IP = dotenv.IP || '192.168.1.231'; //change for the real IP address of the backend
const BACKEND_PORT = process.env.BACKEND_PORT || '3000';
const baseURL = `http://${BACKEND_IP}:${BACKEND_PORT}`;

export default axios.create({
    BACKEND_IP,
    baseURL,
});