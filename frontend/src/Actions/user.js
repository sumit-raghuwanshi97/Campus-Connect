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

    const { data } =  await axios.get(`/user/profile/me`);

    dispatch({
        type : "LoadUserSuccess",
        payload : data,
    }); 

    // await axios.get('/user/profile/me')
    // .then((response) => {

    //   dispatch({
    //     type : "LoadUserSuccess",
    //     payload : response.data.User,
    //   });

    // })
    // .catch((error)=>{
    //   dispatch({
    //     type : "LoadUserFailure",
    //     payload : error,
    //   });

    // });

  } catch (error) {
    
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