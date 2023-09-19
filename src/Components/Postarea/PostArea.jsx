import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostArea = () => {
    const post=useLoaderData();
    const {postId}=useParams()
    const navigate=useNavigate()
    const {id,title,body}=post
    console.log(postId)
    const hadelShow=()=>{
        navigate(-1)
    }
    return (
        <div >
            <h3 className='text-xl font-bold'>Post details about:<span>{id}</span></h3>
            <h3 className='text-xl'>Post details title: {title}</h3>
            <h3 className='text-xl'>Post details body: {body}</h3>
            <button onClick={hadelShow}>Show Details</button>
        </div>
    );
};

PostArea.propTypes = {
    
};

export default PostArea;