import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'; 
import { FaUserCircle } from "react-icons/fa";
import NavDropDown from '../DropDown/NavDropDown';
import { useSelector } from 'react-redux';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";



const Navbar = ({ user }) => {
 
 
  // const  [username , setUsername] = useState('');
  const [isDropdownVisible ,setDropdownVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  // const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);


  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const toggledropdown = ()=>{
    setDropdownVisible(!isDropdownVisible);
  };
  

  return (
    <div>
      <div className='flex sm:hidden bg-[#023047] p-2 text-white space-x-3' onClick={toggleNavbar}> 
       <div>
       { showNavbar ?
       <IoMdClose size={25}/>
      : <MdOutlineMenu size={25}/>
       }
       </div>
    </div>
  
    <nav className={` 
    ${ showNavbar ? 'block' : 'hidden'}
       sm:block-inline sm:flex sm:flex-row sm:items-center sm:justify-between p-4 bg-[#023047] text-white`}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="hidden sm:block sm:w-16 sm:h-16 sm:mr-2" />
        <Link to="/" className="hidden sm:flex font-bold text-2xl">Campus-Connect</Link>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:items-center">
        <Link to="/" className="text-lg hover:text-gray">Home</Link>
        <Link to="/posts" className="text-lg hover:underline">Posts</Link>
        <Link to="/resources" className="text-lg hover:underline">Resources</Link>
        {
        isAuthenticated ? 
        (
          <>
          <button onClick={toggledropdown} className="flex space-x-2 items-center hover:text-[#ffb703]">
          <span><FaUserCircle size={21}/></span><span>{user}</span></button> 
          </>
        )
        :
        (
        <>
        <Link to="/login" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Log in</Link>
        <Link to="/register" className="rounded p-4 bg-[#fb8500] hover:bg-[#ffb703] text-black py-1 px-6 text-lg inline-block">Sign up</Link>
        </>
        )
      }
      </div>
      {isDropdownVisible && <NavDropDown/>}
    </nav>
    </div>
  )
}

export default Navbar;
