import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleReadTime}) => {
      const [knowledges,setKnowledges]= useState([])
    useEffect(() => {
        fetch("fakeData.json")
        .then((res) => res.json())
        .then((data)=> setKnowledges(data));
    },[]);




    return (
        <div>
            <div className="knowledge-container">
                    {
                    knowledges.map((knowledge)=>(
                        <SingleCard 
                        handleReadTime={handleReadTime}
                        knowledge = {knowledge}></SingleCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;