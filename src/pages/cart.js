import React from 'react';
import {cart$, updateCart} from '../components/store.js';
import { Link } from 'react-router-dom';

import Meny from '../components/meny.js';
import Header from '../components/header.js';




const Cart = () => {
    
    let total = 0;

    
    
    
    
    const renderCart = (data, index) => {
        if (data.value.aumont === ""){
            data.value.aumont = "1";
        }
        
        let sum = Number(data.value.price) * Number(data.value.aumont);
        
        total += sum;
        
        return(
            <table style={{width: "700px"}} key={index}>
                <tbody>
                    <tr>
                        <td><b>Product:</b> {data.value.product}</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Amount:</b> {data.value.aumont} st</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Price:</b> {data.value.price} kr</td>
                        <td style={{width: "120px", textAlign: "right"}}><b>Sum:</b> {sum} kr</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    
let data = cart$.value.map(renderCart);

const emptyCart = () => {
    updateCart([]);
}    

if (cart$.value.length === 0){
    return(
        <>
        <Header/>
        <Meny/>
        <center>
        <table>
            <tbody>
                <tr>
                    <td><h2>Cart is Empty!!</h2></td>
                </tr>
            </tbody>
        </table>
        <br/>
        <br/>
        <Link to="/shop/0"><button className="navBtn">Back to Shop</button></Link>
        </center>
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
        <div style={{width: "710px",border: "1px solid black"}}>{data}</div><br/>
        <div style={{width: "705px",border: "1px solid black", textAlign:"right", fontSize: "20px", paddingRight: "5px"}}><b>Total: </b>{total} kr</div>
        <br/>
        <Link to="/cart/"><button className="navBtn" onClick={emptyCart}>Empty Cart !!</button></Link>
        <br/><br/><br/>
        
        <Link to="/checkout/"><button style={{width: "200px", height: "35px", fontSize: "25px"}} className="buyBtn" >CheckOut</button></Link>
        </center>
        </>
    );
}

export default Cart;