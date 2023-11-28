import axios from '../Actions/axios.config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get(`/user/logout`);
        window.location.href = "/";
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
