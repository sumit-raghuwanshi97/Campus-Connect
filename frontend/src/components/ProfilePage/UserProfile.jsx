import React, { useEffect, useState } from 'react';
import axios from '../../Actions/axios.config';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { userId } = useParams();
  const [showTab , setShowTab] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('myposts');
  const loggedInuser   = useSelector((state) => state.user);

  useEffect(() => {
    console.log(loggedInuser);
    if(loggedInuser && loggedInuser.user && loggedInuser.user._id == userId){
      setShowTab(false);
    }
    
    if (!user) {
      axios.get(`/user/${userId}`)
        .then((response) => {
          setUser(response.data.userInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user, userId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-md mb-8'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-3xl font-semibold'>{user ? user.name : 'Loading...'}</h2>
          {/* <button
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
            // Add onClick functionality for editing the profile
          >
            Edit Profile
          </button> */}
        </div>
        <div>
          {/* <p className='text-gray-600'>{user ? user.email : ''}</p> */}
          <div className='flex items-center mt-2'>
            <span className='text-gray-600 mr-4'>{user ? user.branch : ''}</span>
            <span className='text-gray-600'>{user ? user.graduationYear : ''}</span>
          </div>
        </div>
      </div>

     {showTab && 
      <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white p-4 rounded-lg shadow-md'>
        <div className='flex justify-center mb-4'>
          <button
            onClick={() => handleTabChange('myposts')}
            className={`px-4 py-2 mr-4 focus:outline-none ${
              activeTab === 'myposts' ? 'bg-blue-500 text-white' : 'text-blue-500'
            }`}
          >
            My Posts
          </button>
          <button
            onClick={() => handleTabChange('bookmarked')}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === 'bookmarked' ? 'bg-blue-500 text-white' : 'text-blue-500'
            }`}
          >
            Bookmarked Posts
          </button>
        </div>
        {/* Render respective content based on active tab */}
        {activeTab === 'myposts' ? (
          /* Content for My Posts tab */
          <div>
            {/* Display user's posts */}
            {/* Example: <MyPostsComponent userId={userId} /> */}
          </div>
        ) : (
          /* Content for Bookmarked Posts tab */
          <div>
            {/* Display user's bookmarked posts */}
            {/* Example: <BookmarkedPostsComponent userId={userId} /> */}
          </div>
        )}
      </div>
      }
    </div>
  );
};

export default UserProfile;
