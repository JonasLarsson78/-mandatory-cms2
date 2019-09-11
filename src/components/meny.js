import React from 'react';
import { Link } from 'react-router-dom';
import {cart$} from '../components/store.js';




const Meny = () => {
    let sum = 0;
    const renderTotal = (data) =>{
        sum += Number(data.value.aumont);
        
    }

    cart$.value.map(renderTotal)


    return(
        
            <div className="meny">
            <Link to="/"><button className="menyButton">Home</button></Link>
            <Link to="/shop/0"><button className="menyButton">PizzaShop</button></Link>
            <Link to="/drink/0"><button className="menyButton">Drinks</button></Link>
            <Link to="/about/"><button className="menyButton">About</button></Link>
            <Link to="/contact/"><button className="menyButton">Contact</button></Link>
            <Link to="/cart/"><button style={{position: "absolute", right:"80px", width: "200px"}} className="menyButton">Pizza in Cart - {sum} st</button></Link>
            </div>
        
    );
}

export default Meny;