import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';


import {API} from '../components/api.js';

const Comments = (props) =>{
    const id =  props.id;
    const name = props.name;
    
    const [rev, updateRev] = useState([]);

    useEffect(() => {
    axios.get(API.API_ROOT + API.URL_RECENSIONER + API.TOKEN + "&filter[product._id]=" + id)
    .then(response => {
       updateRev(response.data.entries)
   })
}, [id]);

const renderRev = (data) => {
    return(
  
  <table style={{width: "200px", margin: "3px", background: "#fcd5d5"}} key={data._id}>
            <tbody>
                <tr>
                    <td style={{fontSize: "14px", fontWeight: "bold"}}>{data.title}</td>
                </tr>
                <tr>
                    <td style={{fontSize: "12px"}}>{data.body}</td>
                </tr>
                <tr>
                    <td><Rater style={{display: "flex"}} total={5} interactive={false} rating={data.rating}/></td>
                </tr>
            </tbody>
        </table>
    )
}
const goBack = () => {
    window.history.back();
  }
  let info = {
    
    product: {
        "_id": id,
        "link": "produkter",
        "display": name
            }
}

let data = rev.map(renderRev);
    return(
        <>
        <div style={{position: "relative", left: "-303px"}}><b>Comments:</b></div>
        <div className="rev">{data}</div>
        <Link to={{ pathname: '/send/', state: info }}><button className="commentBtn" style={{position: "relative", left: "-273px", marginTop: "10px"}}>Add Comments</button></Link><br/>
        <button className="navBtn" onClick={goBack} style={{position: "relative", left: "-298px", marginTop: "10px"}}>Back</button>
        </>
    )
}

export default Comments