import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    return (
        <div className="cover">
            <h2 className='text-2xl font-bold'>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link to= {`/user/${id}`}>
            
            <button>Ckick me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default User;
