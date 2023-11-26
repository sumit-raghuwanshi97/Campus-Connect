import axios from 'axios';
const baseURl = "https://campus-connect-server-pi.vercel.app";

export const loginUser = (email , password) => async (dispatch) => {
    try {
        
       dispatch({
        type:"LoginRequest"
       });

       const { data } = await axios.post(`${baseURl}/user/login` , {email , password});

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

    const { data } =  await axios.get(`${baseURl}/user/profile/me`);

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