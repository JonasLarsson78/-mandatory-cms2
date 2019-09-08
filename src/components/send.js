import React, {useState} from 'react';
import axios from 'axios';
import Meny from '../components/meny.js';
import Header from '../components/header.js';


import {API} from './api.js';

const SendComments = (props) =>{
const [textInput, updateTextInput] = useState("");
const [textareaInput, updateTextareaInput] = useState("");
const [rateInput, updateRateInput] = useState(0);
    
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

    return(
        <>
        <Header/>
        <Meny/>
        <input onChange={text} type="text"/><br/>
        <textarea onChange={textarea}></textarea><br/>
        <input onChange={rate} type="range" step="1" min="0" max="5"/><br/>
        <button onClick={sendRev}>Send</button><br/>
        <button onClick={goBack}>Back</button>
        </>
    )
}

export default SendComments