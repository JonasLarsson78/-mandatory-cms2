import React, {useState} from 'react';
import {cart$, updateCart} from '../components/store.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API} from '../components/api.js';

import Meny from '../components/meny.js';
import Header from '../components/header.js';




const Checkout = () => {
    
    let total = 0;
    const [, updateTest] = useState("");
    const [name, updateName] = useState("");
    const [adress, updateAdress] = useState("");


    
    const renderCart = (data, index) => {
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

let order = {
    name: name,
    adress: adress,
    total_price: total,
    list: cart$.value

    
};
const ConfirmBuy = () =>{
    axios.post(API.API_ROOT + API.URL_ORDER_POST + API.TOKEN, {data: order})
    .then(response => {
   })
    updateTest("")
    updateCart([])
}

const inputName = (e) => {
    let value = e.target.value;
    updateName(value);
}
const inputAdress = (e) => {
    let value = e.target.value;
    updateAdress(value);
    }
    let btn;
    if (!name || !adress){
        btn = <button disabled="disabled" style={{width: "200px", height: "35px", fontSize: "25px"}} className="buyBtn" onClick={ConfirmBuy}>Confirm Buy</button>
    }
    else{
        btn = <Link to="/done/"><button style={{width: "200px", height: "35px", fontSize: "25px"}} className="buyBtn" onClick={ConfirmBuy}>Confirm Buy</button></Link>
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
        <h2>Checkout:</h2>   
        <div style={{width: "710px",border: "1px solid black"}}>{data}</div><br/>
        <div style={{width: "705px",border: "1px solid black", textAlign:"right", fontSize: "20px", paddingRight: "5px"}}><b>Total: </b>{total} kr</div>
        <br/>
        <br/>
        <h3>Delivery Address:</h3>
        <label style={{marginRight: "10px"}}>Namn: </label>
        <input style={{padding: "3px",height: "25px", width: "300px",border: "1px solid black", borderRadius: "3px", outline: "none"}} onChange={inputName} type="text"/><br/><br/>
        <label style={{marginRight: "5px"}}>Adress: </label>
        <input style={{padding: "3px",height: "25px", width: "300px",border: "1px solid black", borderRadius: "3px", outline: "none"}} onChange={inputAdress} type="text"/>
        <br/><br/><br/><br/>
        {btn}
        </center>
        </>
    );
}

export default Checkout;