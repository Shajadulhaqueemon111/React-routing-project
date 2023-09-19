import React from 'react';
import PropTypes from 'prop-types';
import User from '../Uesr/User.jsx'
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users=useLoaderData();
    console.log(users)
    return (
        <div>
            <h2 className='text-2xl font-bold'>Our users: {users.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    users.map(user =><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;