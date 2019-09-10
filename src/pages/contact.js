import React, {useRef, useState} from 'react';
import Meny from '../components/meny.js';
import Header from '../components/header.js';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import {API} from '../components/api.js';




const Contact = () => {
    const inputText = useRef(null);
    const inputTextarea = useRef(null);
    const inputEmail= useRef(null);

    const [text, updateText] = useState("");
    const [textArea, updateTextArea] = useState("");
    const [email, updateEmail] = useState("");
    const [redirect, updateRedirect] = useState(null);

    const goBack = () =>{
        window.history.back();
    }
    
    const onChangeText = (e) =>{
        let value = e.target.value;
        updateText(value);
    }
    const onChangeTextarea = (e) =>{
        let value = e.target.value;
        updateTextArea(value);
    }
    const onChangeEmail = (e) =>{
        let value = e.target.value;
        updateEmail(value);
    }
    let data = {
            Name: text,
            E_mail: email,
            Message: textArea
    }
    const send = () =>{
        axios.post(API.API_ROOT + API.URL_FORM_CONSTACT_POST + API.TOKEN, {form: data})
    .then(response => {
        
        updateRedirect(response.data);
        
   })
    }
    
    let sendBtn;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!text || !textArea || !email || !email.match(regex)){
        sendBtn = <button disabled="disabled" className="navBtn">Send</button>
    }
    else{
        sendBtn = <button onClick={send} className="navBtn">Send</button>
    }

    if (redirect){
        return <Redirect to={{pathname: '/sendform/', state: { redirect }}}/>
    }
    console.log(redirect)
    return(
        <>
            <Header/>
            <Meny/>
            <center>
                <table style={{width: "700px"}}>
                    <tbody>
                        <tr>
                            <td><h2 style={{color: "#db3131"}}>Contact:</h2></td>
                        </tr>
                        <tr>
                            <td><label>Namn:</label><br/><input placeholder="Name..." onChange={onChangeText} ref={inputText} style={{width: "100%", outline: "none", border: "1px solid black", borderRadius: "3px"}} type="text"/></td>
                        </tr>
                        <tr>
                            <td><label>E-mail:</label><br/><input placeholder="mail@mail.com..." onChange={onChangeEmail} ref={inputEmail} style={{width: "100%", outline: "none", border: "1px solid black", borderRadius: "3px"}} type="email"/></td>
                        </tr>
                        <tr>
                            <td><label>Message:</label><br/><textarea placeholder="Message..." onChange={onChangeTextarea} ref={inputTextarea} style={{width: "99.5%", height: "200px", outline: "none", border: "1px solid black", borderRadius: "3px"}}/></td>
                        </tr>
                        <tr>
                            <td>
                            {sendBtn}
                            </td>
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