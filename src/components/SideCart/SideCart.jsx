import React, { useEffect, useState } from 'react';

const SideCart = ({readTime,blogTime}) => {
   const [time, setTime]= useState(readTime);
   const [bookmark, setbookmark]= useState(blogTime);

   useEffect( ()=>{
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
   }, [readTime]);
   useEffect( ()=>{
    const getblogTimeFromStorage = localStorage.getItem("blogTime");
    setbookmark(getblogTimeFromStorage);
   }, [blogTime]);
 

return (
   <div>
     <button className='w-100 btn btn-info opacity-50 mb-3 fw-bolder'>spent time read :{time} </button>   
     <button className='w-100 btn btn-info opacity-50 fw-bolder'>Bookmark Blogs :{bookmark} </button>   
   </div>
 );
};

export default SideCart;