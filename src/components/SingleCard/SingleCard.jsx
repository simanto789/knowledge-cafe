import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ knowledge, handleReadTime }) => {

    return (
        <div>
            <div className="knowledge-card card text-start mb-4">
                <div className="knowledge-poster mb-2 ">
                    <img className='img-fluid d-block mx-auto my-auto' src={knowledge.images} style={{ height: 340, width: 740 }} alt="" />
                </div>
                <div className="author-container d-flex justify-content-between">
                    <div className='author-container d-flex gap-2'>
                        <div>
                            <img src={knowledge.authorImage} style={{ height: 50, width: 50 }} alt="" />
                        </div>
                        <div>
                            <h5>{knowledge.author}</h5>
                            <p> {knowledge.publishDate} (4 days ago)</p>
                        </div>
                    </div>
                    <div>
                        <p>{knowledge.readTime} min read <span> <FontAwesomeIcon icon={faBookmark} /></span> 
                        </p>
                    </div>
                </div>
                <h3>{knowledge.title}</h3>
                <button onClick={()=>handleReadTime(knowledge.readTime)} className='btn btn-success'>mark as read</button>
            </div>
        </div>
    );
};

export default SingleCard;