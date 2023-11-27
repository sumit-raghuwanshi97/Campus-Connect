import React, { useEffect , useState} from 'react';
import axios from '../../Actions/axios.config';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  
  const { userId } = useParams(); 
  const [user,setUser] =useState('');
 
  useEffect( () => {

  if(!user.name){
  axios.get(`/user/${userId}`).then((response)=>{
  setUser(response.data.userInfo);})
  .catch((error)=>{console.log(error);});
  }

  });

  return (
    //Make Ui of the user  profile 
    <div className='fixed inset-0 flex justify-center items-center  bg-blue-200'>
      <div className=' bg-white p-20  space-y-1 text-gray-600 grid'>
        <p className='font-semibold text-3xl'>{user.name}</p>
        <p>{user.email}</p>
        <div className='flex space-x-3'>
        <p>{user.branch}</p>
        <p>{user.graduationYear}</p>
        </div>  
        {/* <p>Bookmarked Posts - {user.bookmarkedPost.length}</p> */}
      </div>
    </div>
  )
}

export default UserProfile;
