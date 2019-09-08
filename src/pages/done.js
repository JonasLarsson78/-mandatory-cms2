import React from 'react';
import Meny from '../components/meny.js';
import Header from '../components/header.js';

const Done = () => {

    let time = Math.floor(Math.random() * 44) + 15;

    return(
        <>
        <Header/>
        <Meny/>
        <center>
            <br/><br/>
        <table>
            <tbody>
                <tr><h1>Thank you for your order!! <span aria-label="img" role="img">👍👍</span></h1></tr>
                <tr><h3 style={{textAlign: "center"}}>Your order is on it's way.</h3></tr>
                <tr><h3 style={{textAlign: "center"}}>Delivery time: {time} min</h3></tr>
            </tbody>
        </table>
        </center>
        </>
    );
};

export default Done;