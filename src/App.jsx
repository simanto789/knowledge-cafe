import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/icon.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import Question from './components/Question/Question'

function App() {
  const [readTime,setReadTime]= useState("");
  const handleReadTime = (time) => {
  const previousReadTime =JSON.parse(localStorage.getItem("readTime"));
  if(previousReadTime) {
  const sum = previousReadTime + time;
  localStorage.setItem("readTime",sum);
  setReadTime(sum);
  }
  else {
   localStorage.setItem("readTime",time);
   setReadTime(time);
  }
};
  const [blogTime,setblogTime]= useState("");
  const handleblogTime = (bookmark) => {
  const previousblogTime =JSON.parse(localStorage.getItem("blogTime"));
  if(previousblogTime) {
  const sum = previousblogTime + bookmark;
  localStorage.setItem("blogTime",sum);
  setblogTime(sum);
  }
  else {
   localStorage.setItem("blogTime",bookmark);
   setblogTime(bookmark);
  }
};
  

  return (
    <div>
        <div className="header m-auto mb-3">
            <Header></Header>
        </div>
        <div className="main row">
           <div className="home-container col-md-8">
            <Home handleReadTime = {handleReadTime}
            handleblogTime={handleblogTime}></Home>
           </div>
           <div className="sideCart col-md-4 card">
            <SideCart readTime = {readTime}
            blogTime={blogTime}></SideCart>
           </div>
        </div>
        <div>
          <Question></Question>
        </div>
    </div>
  )
}

export default App;