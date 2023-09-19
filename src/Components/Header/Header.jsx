import React from 'react';
import{Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css'
const Header = ()=> {
    return (
        <div>
            
            <h2 className='text-2xl font-bold'>My website</h2>
            <nav>
            <Link to="./">Home</Link>
            <Link to="./about">About</Link>
            <NavLink to="./post">Post</NavLink>
            <NavLink to="./users">Users</NavLink>
           
            <Link to="./contact">Contact</Link>
            {/* <Link to="./users">Users</Link> */}
                
            </nav>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;