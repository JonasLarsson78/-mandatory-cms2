import React from 'react';
import { Link } from 'react-router-dom';

import Meny from '../components/meny.js';
import Header from '../components/header.js';



const Start = () => {
    

    return(
        <>
            <Header/>
            <Meny/>
            <div className="main">
            
            </div>
            <center>
                <Link to="/shop/0"><button className="widgetBtn widgetBtn1">Pizza Shop</button></Link>
                <Link to="/cart/"><button className="widgetBtn widgetBtn2">Cart</button></Link>
                <Link to="/contact/"><button className="widgetBtn widgetBtn3">Contact</button></Link>
            </center>
        </>
    );
}

export default Start;