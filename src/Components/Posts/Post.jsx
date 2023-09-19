import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Posts from '../../Components/Post/Posts.jsx'
const Post = () => {
    const post=useLoaderData()
    return (
        <div>
            <h2 className='text-xl font-bold'>Post :{post.length} </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    post.map(poster=><Posts key={poster.id} poster={poster}></Posts>)
                }
            </div>
        </div>
    );
};

Post.propTypes = {
    
};

export default Post;