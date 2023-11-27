import axios from 'axios';
const SERVER_URL = "http://localhost:8080";
// online_server : https://campus-connect-server-pi.vercel.app

const instance = axios.create({
    baseURL : SERVER_URL,
    withCredentials :  true,
});

export default instance;