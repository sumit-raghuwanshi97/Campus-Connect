import axios from 'axios';
import { useEffect } from 'react';
const baseURl = "https://campus-connect-server-pi.vercel.app";



function LogoutUser (){

    useEffect(()=>{

        async function logoutUser(){
            await axios.get(`${baseURl}/user/logout`);
            window.location.href = '/';
        }

        logoutUser();
    
    },[]);
  

}

export default LogoutUser;