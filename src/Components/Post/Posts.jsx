import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Posts = ({poster}) => {
    const {id,title,body}=poster
const navigate=useNavigate();
    const handelDetails=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='cover'>
            <h2 className='tetx-xl font-bold'>Post of id:{id}</h2>
            <h2 className='text-xl'>Post of title :{title}</h2>
            <h2>{body}</h2>
            <Link className='grow' to={`/post/${id}`}>
                <button>post details</button>
            </Link>
            <button onClick={handelDetails}>Click to see details</button>
        </div>
    );
};

Posts.propTypes = {
    
};

export default Posts;