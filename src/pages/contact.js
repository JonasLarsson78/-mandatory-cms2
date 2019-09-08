import React from 'react';

import Meny from '../components/meny.js';
import Header from '../components/header.js';



const Contact = () => {
    const goBack = () =>{
        window.history.back();
    }

    return(
        <>
            <Header/>
            <Meny/>
            <center>
                <table style={{width: "700px"}}>
                    <tbody>
                        <tr>
                            <td><h2>Contact:</h2></td>
                        </tr>
                        <tr>
                            <td><label>Namn:</label><br/><input style={{width: "100%"}} type="text"/></td>
                        </tr>
                        <tr>
                            <td><label>Message:</label><br/><textarea style={{width: "100%", height: "200px"}}/></td>
                        </tr>
                        <tr>
                            <button className="navBtn">Send</button>
                        </tr>
                        <tr>
                            <td><h3>Adress:</h3></td>
                        </tr>
                        <tr>
                            <td>
                                Pizza Shop<br/>
                                Grönavägen 5<br/>
                                <a href="mailto:pizza@shop.se">pizza@shop.se</a><br/>
                                010-1234567
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <button onClick={goBack} className="navBtn">Back</button>
            </center>
        </>
    );
}

export default Contact;