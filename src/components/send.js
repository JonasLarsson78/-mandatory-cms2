import React, {useState, useRef} from 'react';
import axios from 'axios';
import Meny from '../components/meny.js';
import Header from '../components/header.js';
import Rater from 'react-rater';



import {API} from './api.js';

const SendComments = (props) =>{
const [textInput, updateTextInput] = useState("");
const [textareaInput, updateTextareaInput] = useState("");
const [rateInput, updateRateInput] = useState(5);
const send = useRef(null);
    
const product = props.location.state.product;

let data = {
    title: textInput,
    body: textareaInput,
    rating: rateInput,
    product: product
}

const sendRev = () =>{
    axios.post(API.API_ROOT + API.URL_RECENSIONER_POST + API.TOKEN, {data: data})
    .then(response => {
        window.history.back();
   })
}
const text = (e) => {
    const value = e.target.value;
    updateTextInput(value);
}
const textarea = (e) => {
    const value = e.target.value;
    updateTextareaInput(value);
}
const rate = (e) => {
    const value = e.target.value;
    updateRateInput(value);
}
const goBack = () => {
    window.history.back();
  }
  let sendBtn;
  if (!textInput || !textareaInput){
    sendBtn = <button ref={send} className="navBtn" onClick={sendRev} disabled="disabled">Send</button>
}
else{
    sendBtn = <button ref={send} className="navBtn" onClick={sendRev}>Send</button>
}
  

    return(
        <>
        <Header/>
        <Meny/>
        <center>
            <table style={{width: "700px"}}>
                <tbody>
                    <tr>
                        <td><h2>Comment:</h2></td>
                    </tr>
                    <tr>
                        <td><label>Title:</label><br/><input style={{width: "100%", outline: "none"}} onChange={text} type="text"/></td>
                    </tr>
                    <tr>
                        <td><label>Comment:</label><br/><textarea style={{width: "100%", height: "200px", outline: "none"}} onChange={textarea}></textarea></td>
                    </tr>
                    <tr>
                        <td><input style={{width: "100%"}} onChange={rate} type="range" step="1" min="0" max="5"/><center><Rater style={{display: "flex", justifyContent: "center"}} total={5} interactive={false} rating={rateInput}/></center></td>
                    </tr>
                    <tr>
                        <td>
                            {sendBtn}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/><br/><br/><br/>
            <button className="navBtn" onClick={goBack}>Back</button>
        </center>
        
        
        
        
        
        </>
    )
}

export default SendComments