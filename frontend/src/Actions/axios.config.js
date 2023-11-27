import axios from 'axios';
const SERVER_URL = "https://campus-connect-server-pi.vercel.app";
// online_server : https://campus-connect-server-pi.vercel.app

const instance = axios.create({
    baseURL : SERVER_URL,
    withCredentials :  true,
});

export default instance;