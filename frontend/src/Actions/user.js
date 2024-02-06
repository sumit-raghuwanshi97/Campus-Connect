import LogoutUser from '../pages/LogoutUser';
import axios from './axios.config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase';

export const loginWithGoogle = () => async (dispatch) =>{
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  signInWithPopup(auth , provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    const User = {
      name : result.user.displayName,
    }

    console.log(user);

    dispatch({
      type:"LoginSuccess",
      payload: User,
     });

  }).catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;
    // const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

  });

};


export const loginUser = (email , password) => async (dispatch) => {
  
    try {
       dispatch({
        type:"LoginRequest"
       });

       const { data } = await axios.post(`/user/login` , {email , password});

       const accessToken = data.token;
       localStorage.setItem('access_token', accessToken);

       dispatch({
        type:"LoginSuccess",
        payload: data.User,
       });

    } catch (error) {

        console.log(error); 

        dispatch({
            type:"LoginFailure",
            payload : error,
        });
        
    }
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
        type : "LoadUserRequest",
    });

    const storedAccessToken = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${storedAccessToken}`;
    
    const { data } =  await axios.get(`/user/profile/me`);

    dispatch({
        type : "LoadUserSuccess",
        payload : data,
    }); 

  } catch (error) {
    console.log("failure");
    dispatch({
        type : "LoadUserFailure",
        payload : error,
    });

  }
}


export const logoutUser = () => async(dispatch) => {

  try {

    dispatch({
      type:"LogoutUserRequest",
    });

    localStorage.setItem('access_token','');
    await axios.get(`/user/logout`);

    dispatch({
      type:"LogoutUserSuccess",
    });

    window.location.href = '/';

  } catch (error) {
    
    dispatch({
      type:"LogoutUserFailure",
    });

  }
   

   
}