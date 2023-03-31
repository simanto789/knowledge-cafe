import React, { useEffect, useState } from 'react';

const SideCart = ({readTime}) => {
   const [time, setTime]= useState(readTime);

   useEffect( ()=>{
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
   }, [readTime]);
 

return (
   <div>
     <h5>spent time read :{time} </h5>   
   </div>
 );
};

export default SideCart;