import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {cart$, updateCart} from '../components/store.js';
import Meny from '../components/meny.js';
import Header from '../components/header.js';


import {API} from '../components/api.js';

const Product = (props) => {
    const id =  props.match.params.id;
    const [info, updateInfo] = useState([]);
    const [input, updateInput] = useState("");
    const [test, updateTest] = useState("");

    useEffect(() => {
        axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&filter[_id]=" + id)
        .then(response => {
           updateInfo(response.data.entries);
       })
      }, [id]);


      const renderInfo = (data, index) => {

        const onChange = (e) => {
            updateInput(e.target.value);
        }
        const addToCart = () => {
            let cart = 
                {
                    "id": data._id,
                    "name": data.name,
                    "price": data.price,
                    "amount": input
                };
            updateTest("test")
            updateCart([...cart$.value, cart])
            window.history.back();
        }
        
            const renderGallery = (data, index) => {
  
              return(
                  <img alt="img" key={index} style={{width: "200px"}} src={API.API_ROOT + data.path}/>
              );
            }
      
          let gallery = data.gallery.map(renderGallery)

        return(
            <table style={{width: "700px", marginTop: "30px"}}key={data._id}>
                <tbody>
                    <tr>
                        <td><h1>{data.name}</h1></td>
                    </tr>
                    <tr style={{fontSize: "20px", height: "20px"}}>
                        <td><b>Description: </b></td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td><p>{data.description}</p></td>
                    </tr>
                    <tr>
                        <td><b>Price: </b>{data.price} kr</td>
                    </tr>
                    <tr>
                        <td><b>In Stock: </b>{data.stock} st</td>
                    </tr>
                    <tr>
                        <td>
                        <input min="0" style={{width: "60px"}} onChange={onChange} type="number"/>
                        <button onClick={addToCart}>Buy</button>
                        </td>
                    </tr>
                    <tr>
                        <td><br/><br/>{gallery}</td>
                    </tr>
                </tbody>
            </table>
        );

      };
      
      

      let data = info.map(renderInfo);
const nul = () =>{
    updateTest("test")
    updateCart([])
}
    const goBack = () => {
    window.history.back();
  }
    return(
        <>
        <Header/>
        <Meny/>
        <button onClick={nul}>null</button>
        <center>
        {data}
        <button onClick={goBack}>Back</button>
        </center>
        </>
    );

};

export default Product;