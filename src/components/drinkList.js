import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {API} from './api.js';


const ShopList = (props) => {

    const page =  props.page * 10;

    const [productList, updateProductlist] = useState([]);
    const [max, updateMax] = useState(null);


    useEffect(() => {

        axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN)
        .then(response => {
           updateMax(response.data.entries.length);
       })
      }, [max]);

    
   useEffect(() => {
   
    
           axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&limit=10&skip=" + page + "&filter[category][$regex]=Drink&sort[price]=1&sort[name]=1")
        .then(response => {
           updateProductlist(response.data.entries);
           
        })
      }, [page, max]);

const renderShop = (data) => {
    let img = "";
    if (!data.gallery[0]){
        img = require("../img/no_img.jpg");
    }
    else{
        img = API.API_ROOT + data.gallery[0].path
    }
    
    
    return(
        <table style={{padding: "15px"}} key={data._id}>
            <tbody>
                <tr>
                    <td><img alt="img" style={{width: "220px",border: "1px solid gray", borderRadius: "3px"}} src={img}/></td>
                </tr>
                <tr>
                    <td className="pizzaLink"><Link to={"/product/" + data._id}>{data.name}</Link></td>
                </tr>
                <tr>
                    <td>{data.price} Kr <Link to={"/product/" + data._id}><button style={{height:"20px", width: "50px",position: "relative", top: "-2px"}} className="buyBtn">Buy</button></Link></td>
                </tr>
                
            </tbody>
        </table>
    );
}

    const data = productList.map(renderShop);

   
       

      

    return(
        
            <div className="productList">
                {data}
            </div>
            
            
        
    );
}

export default ShopList;