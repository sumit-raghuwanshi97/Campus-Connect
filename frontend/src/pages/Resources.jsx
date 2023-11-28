import React, { useEffect, useState } from 'react';
import { GiProcessor } from "react-icons/gi";



const Resources = () => {
const [button , setButton] = useState(false);


  return (
    <div>
       <div className='flex items-center justify-center m-5 p-2'>
        <h1 className='text-4xl font-bold'>Resources</h1>
       </div>
       <div className='flex justify-center m-3 p-3'>
       {button ? 
       <GiProcessor onClick={()=>setButton(false)} size={300} className='text-red-700'/>
       :
       <GiProcessor onClick={()=>setButton(true)}size={300} className='text-blue-400'/>
       }
       </div>
       <div className='flex justify-center'>
        <h1 className='font-bold text-2xl text-gray-600'>This page is under maintainence</h1>
       </div>
    </div>
  )
}

export default Resources
