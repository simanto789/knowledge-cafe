import React, { useEffect, useState } from 'react';

const SideCart = ({readTime}) => {
   const [time, setTime]= useState(readTime);

   useEffect( ()=>{
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
   }, [readTime]);
 

return (
   <div>
     <button className='w-100 btn btn-info opacity-75'>spent time read :{time} </button>   
   </div>
 );
};

export default SideCart;