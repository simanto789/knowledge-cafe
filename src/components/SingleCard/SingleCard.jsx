import React from 'react';

const SingleCard = ({knowledge}) => {
    
    return (
        <div>
            <div className="knowledge-card card text-start">
                    <div className="knowledge-poster mb-3">
                        <img src={knowledge.images} style={{ height: 340 , width: 740 }} alt="" />
                    </div>
                    <div className="author-container d-flex justify-content-between">
                      <div className='author-container d-flex gap-2'>
                            <div>
                            <img src={knowledge.authorImage} style={{ height: 50 , width: 50 }} alt="" />
                            </div>
                            <div>
                            <h5>{knowledge.author}</h5>
                            <p>march 14 (4 days ago)</p>
                            </div>
                            </div>
                        <div>
                            <p>5 mnt read</p>
                        </div>
                     </div>
                    <h3>{knowledge.title}</h3>
                    <button>mark as read</button>
                </div>
        </div>
    );
};

export default SingleCard;