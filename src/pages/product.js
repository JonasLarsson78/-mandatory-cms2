import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {cart$, updateCart} from '../components/store.js';
import Meny from '../components/meny.js';
import Header from '../components/header.js';
import Comments from '../components/comments.js';



import {API} from '../components/api.js';

const Product = (props) => {
    const id =  props.match.params.id;
    
    const [info, updateInfo] = useState([]);
    const [input, updateInput] = useState("");
    const [, updateTest] = useState("");
    const [name, updateName] = useState("");

    useEffect(() => {
        axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&filter[_id]=" + id)
        .then(response => {
           updateInfo(response.data.entries);
           updateName(response.data.entries[0].name);
       })
      }, [id]);


      const renderInfo = (data) => {

        const onChange = (e) => {
            updateInput(e.target.value);
        }
        const addToCart = () => {
            let cart = 
                {   "value":{
                    "product": data.name,
                    "price": data.price,
                    "aumont": input
                }
                    
                };
            updateTest("test")
            updateCart([...cart$.value, cart])
            window.history.back();
        }
        
            const renderGallery = (data, index) => {
  
              return(
                  <img alt="img" key={index} style={{width: "180px"}} src={API.API_ROOT + data.path}/>
              );
            }
      
          let gallery = data.gallery.map(renderGallery)

        return(
            <table style={{width: "700px", marginTop: "5px"}}key={data._id}>
                <tbody>
                    <tr>
                        <td><h1 style={{color: "#db3131"}}>{data.name}</h1></td>
                    </tr>
                    <tr style={{fontSize: "20px", height: "20px"}}>
                        <td><b>Description: </b></td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td><p>{data.description}</p></td>
                    </tr>
                    <tr>
                        <td><b>In Stock: </b>{data.stock} st</td>
                    </tr>
                    <tr>
                        <td><b> Price: </b>{data.price} kr</td>
                    </tr>
                    <tr>
                        <td>
                        <input defaultValue="1" min="1" max="10" style={{width: "60px"}} onChange={onChange} type="number"/>
                        <button className="buyBtn" onClick={addToCart}>Buy</button>
                        </td>
                    </tr>
                    <tr>
                        <td><br/>{gallery}</td>
                    </tr>
                </tbody>
            </table>
        );

      };
      
      

      let data = info.map(renderInfo);

    
    return(
        <>
        <Header/>
        <Meny/>
        <center>
        {data}
        <Comments id={id} name={name}/>
        
        
        </center>
        
        </>
    );
        
};

export default Product;