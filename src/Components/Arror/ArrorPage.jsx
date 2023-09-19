import React from 'react';
import PropTypes from 'prop-types';
import { useRouteError, useRoutes } from 'react-router-dom';
import{Link} from 'react-router-dom';

const ArrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <h2 className='text-2xl font-bold'>Opps!!!!!!!!</h2>
            
               <p>{error.statusText || error.message}</p> 
            {
                error.status===404 && <div>
                    <h3>page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

ArrorPage.propTypes = {
    
};

export default ArrorPage;