import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {API} from './api.js';


const ShopList = (props) => {

    const page =  props.page * 14;

    const [productList, updateProductlist] = useState([]);
    const nextList = useRef(null);
    const prevList = useRef(null);

    
   useEffect(() => {
       
        axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&limit=14&skip=" + page)
        .then(response => {
           updateProductlist(response.data.entries)
        })
      }, [page]);

const renderShop = (data) => {
    let img = "";
    if (!data.gallery[0]){
        img = require("../img/no_img.jpg");
    }
    else{
        img = API.API_ROOT + data.gallery[0].path
    }
    
    
    return(
        <table style={{padding: "20px"}} key={data._id}>
            <tbody>
                <tr>
                    <td><img alt="img" style={{width: "150px",border: "1px solid gray"}} src={img}/></td>
                </tr>
                <tr>
                    <td><Link to={"/product/" + data._id}>{data.name}</Link></td>
                </tr>
                <tr>
                    <td>{data.price} Kr</td>
                </tr>
                
            </tbody>
        </table>
    );
}

    let next = Number(props.page) + 1;
    let prev = Number(props.page) - 1;
    const data = productList.map(renderShop);

    const search = (e) =>{
        let input = e.target.value;
        if (!input){
            axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&limit=14&skip=" + page)
        .then(response => {
           updateProductlist(response.data.entries)
        })
        }
        else{
            axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&filter[name][$regex]=" + input)
        .then(response => {
            
           updateProductlist(response.data.entries);
       }) 
        }
       };

    return(
        <>
            <input onChange={search} placeholder="Search..." style={{height: "20px",width: "150px",marginTop: "20px", marginLeft: "80px"}} type="text"/>
            <div className="productList">
                {data}
            </div>
            <br/><br/>
            <div style={{textAlign: "center"}}>
                <Link to={"/shop/" + prev} ><button ref={prevList}>Prev Page</button></Link>
                <Link to={"/shop/" + next} ><button ref={nextList}>Next Page</button></Link>
            </div>
        </>
    );
}

export default ShopList;