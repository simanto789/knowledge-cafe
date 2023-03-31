import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        fetch("fakeData.json")
        .then((res) => res.json())
        .then((data)=> console.log(data));
    },[]);




    return (
        <div>
            <div className="knowledge-container">
                <div className="knowledge-card card text-start">
                    <div className="knowledge-poster">
                        <img src="https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?w=826&t=st=1680202370~exp=1680202970~hmac=aeed6a76940895823703dfa6a45e98502f2907a99c5fa9b760187e74e41a3ed9"  style={{ height: 300 , width: 700 }} alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p>read time</p>
                        <p>rating</p>
                    </div>
                    <p>mark as read</p>
                </div>
            </div>
        </div>
    );
};

export default Home;