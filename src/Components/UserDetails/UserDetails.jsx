import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const UserDetails = ({params}) => {
    const user=useLoaderData()
    const {name,website}=user;
    return (
        <div className='font-bold text-xl'>
            <h2>Details :{name}</h2>
            <h2>Website :{website}</h2>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;