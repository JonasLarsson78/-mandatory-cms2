import React from 'react';
import {Link} from 'react-router-dom';
import Meny from '../components/meny.js';
import Header from '../components/header.js';


const SendForm = (props) => {
let data = props.location.state.redirect;
console.log(data)
    return(
        <>
        <Header/>
        <Meny/>
        <center>
        <table style={{width: "700px"}}>
                <tbody>
                    <tr>
                        <td><h1>Thank you for your message!!</h1></td>
                    </tr>
                    <tr>
                        <td><h2>We will respond within 24 hours.</h2></td>
                    </tr>
                    <tr>
                        <td><h3>Sent message:</h3></td>
                    </tr>
                    <tr>
                        <td><b>Name:</b> {data.Name}</td>
                    </tr>
                    <tr>
                        <td><b>E-mail:</b> {data.E_mail}</td>
                    </tr>
                    <tr>
                        <td><b>Message:</b> {data.Message}</td>
                    </tr>
                </tbody>
            </table>
            <br/><br/><br/><br/>
            <Link to="/shop/0"><button className="navBtn">Back to Shop</button></Link>
        </center>
        
        </>
    )
}

export default SendForm;