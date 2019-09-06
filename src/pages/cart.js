import React, {useState, useEffect, useRef} from 'react';
import {cart$, updateCart} from '../components/store.js';
import { Link } from 'react-router-dom';

import Meny from '../components/meny.js';
import Header from '../components/header.js';




const Cart = () => {
    
    let total = 0;
    const [test, updateTest] = useState("");

    
    const renderCart = (data, index) => {
        let sum = Number(data.price) * Number(data.amount);
        total += sum;
        
        return(
            <table style={{width: "700px"}} key={index}>
                <tbody>
                    <tr>
                        <td><b>Product:</b> {data.name}</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Amount:</b> {data.amount} st</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Price:</b> {data.price} kr</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Sum:</b> {sum} kr</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    
let data = cart$.value.map(renderCart);
const ConfirmBuy = () =>{
    updateTest("test")
    updateCart([])
}
console.log(cart$.value.length)
if (cart$.value.length === 0){
    return(
        <>
        <Header/>
        <Meny/>
        <div>Cart is Empty!!</div>
        </>
    )
}
    return(
        <>
        <Header/>
        <Meny/>
        <center>
        <br/><br/>
        <h2>Cart:</h2>   
        <div style={{width: "710px",border: "1px solid black"}}>{data}</div>
        <div style={{width: "705px",border: "1px solid black", textAlign:"right", fontSize: "20px", paddingRight: "5px"}}><b>Total: </b>{total} kr</div>
        <br/>
        <Link to="/done/"><button onClick={ConfirmBuy}>Confirm Buy</button></Link>
        </center>
        </>
    );
}

export default Cart;