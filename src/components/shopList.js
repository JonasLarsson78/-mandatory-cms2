import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {API} from './api.js';


const ShopList = (props) => {

    const page =  props.page * 10;

    const [productList, updateProductlist] = useState([]);
    const [check, updateCheck] = useState(false);
    const [max, updateMax] = useState(null);

    const nextList = useRef(null);
    const prevList = useRef(null);

    useEffect(() => {

        axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN)
        .then(response => {
           updateMax(response.data.entries.length);
       })
      }, [max]);

    
   useEffect(() => {
    console.log(page)
    if(page === 0){
        prevList.current.disabled = "disabled";
    }
    else{
        prevList.current.disabled = "";
    }
    let filter = "";
       if (check){
           filter = "&filter[stock][$not]=0&limit=10&skip=";
       }
       else{
           filter = "&limit=10&skip="
       }
           axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + filter + page + "&sort[price]=1")
        .then(response => {
            const length = response.data.entries.length;
           updateProductlist(response.data.entries);
           if (max === page + length){
            nextList.current.disabled = "disabled";
            nextList.current.innerHTML = "End";
           }
           else{
            nextList.current.disabled = "";
            nextList.current.innerHTML = "Next Page";
           }
        })
      }, [page, max, check]);

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
                    <td><img alt="img" style={{width: "220px",border: "1px solid gray", borderRadius: "3px"}} src={img}/></td>
                </tr>
                <tr>
                    <td className="pizzaLink"><Link to={"/product/" + data._id}>{data.name}</Link></td>
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
            axios.get(API.API_ROOT + API.URL_PRODUKTER + API.TOKEN + "&limit=10&skip=" + page)
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
       const checkbox = (e) =>{
        let check = e.target.checked;
        if(check){
            updateCheck(true);
        }
        else{
            updateCheck(false);
        }
       }

    return(
        <>
            <input onChange={search} placeholder="Search..." style={{height: "20px",width: "150px",marginTop: "20px", marginLeft: "105px", outline: "none",border: "1px solid black", borderRadius: "3px"}} type="text"/><br/>
            <input style={{marginLeft: "105px",marginTop: "10px"}} onChange={checkbox} type="checkbox"/><label>In Stock</label>
            <div className="productList">
                {data}
            </div>
            
            <div style={{textAlign: "center"}}>
                <Link to={"/shop/" + prev} ><button className="navBtn" ref={prevList}>Prev Page</button></Link>
                <Link to={"/shop/" + next} ><button className="navBtn" ref={nextList}>Next Page</button></Link>
            </div>
        </>
    );
}

export default ShopList;