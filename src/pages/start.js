import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Meny from '../components/meny.js';
import Header from '../components/header.js';



const Start = () => {
    

    return(
        <HelmetProvider>
            <Helmet>
                <title>WebShop</title>
            </Helmet>
            <Header/>
            <Meny/>
            <div className="main">
            Start
            </div>
        </HelmetProvider>
    );
}

export default Start;