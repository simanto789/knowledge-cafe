import React from 'react';

const SingleCard = ({knowledge}) => {
    
    return (
        <div>
            <div className="knowledge-card card text-start">
                    <div className="knowledge-poster">
                        <img src={knowledge.images} style={{ height: 300 , width: 700 }} alt="" />
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
    );
};

export default SingleCard;