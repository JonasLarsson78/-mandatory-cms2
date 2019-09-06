import React from 'react';
import { Link } from 'react-router-dom';
import {cart$} from '../components/store.js';




const Meny = () => {
    

    return(
        
            <div className="meny">
            <Link to="/"><button className="menyButton">Home</button></Link>
            <Link to="/shop/0"><button className="menyButton">Shop</button></Link>
            <Link to="/cart/"><button className="menyButton">Cart - {cart$.value.length} st</button></Link>
            </div>
        
    );
}

export default Meny;