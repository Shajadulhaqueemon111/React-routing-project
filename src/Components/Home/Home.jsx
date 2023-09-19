import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation=useNavigation()
    const location =useLocation()
    console.log(location)
    return (
        <div>
            <Header></Header>
            <h2>This is the home component</h2>
            {
                navigation.state==="loading"?
                <p>Lodding........</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;