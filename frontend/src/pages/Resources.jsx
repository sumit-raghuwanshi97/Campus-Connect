import React, { useEffect, useState } from 'react';
import { GiProcessor } from "react-icons/gi";



const Resources = () => {
const [button , setButton] = useState(false);


  return (
    <div className='flex bg-[#219EBC] w-screen h-screen align-center justify-center'>
      <img 
      src="https://media.istockphoto.com/id/1398619494/photo/alarm-clock-and-coming-soon-written-white-lightbox-sitting-on-blue-background.jpg?s=612x612&w=0&k=20&c=tJUQDLTdBaDBwTK08qRS_VjfMdvO-YsAJOhJJwN2TT8="
      alt="coming soon"
      className='sm:h-auto w-auto p-20'
     />
      

    </div>
  )
}

export default Resources
