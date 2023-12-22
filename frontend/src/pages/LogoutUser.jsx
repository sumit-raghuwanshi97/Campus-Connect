import axios from '../Actions/axios.config';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../Actions/user';

const LogoutUser = () => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        
        dispatch(logoutUser());
      } catch (error) {
        // Handle any logout errors here
        console.error('Logout failed:', error);
      }
    };

    logout();
  }, [navigate]);

  return null; // or you can return a message or component if needed
};

export default LogoutUser;
