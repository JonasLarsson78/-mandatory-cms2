import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API} from '../components/api.js';


const Admin = () => {

    const [orders, updateOrders] = useState([]);

    useEffect(() => {
        axios.get(API.API_ROOT + API.URL_ORDER + API.TOKEN)
        .then(response => {
            console.log(response.data.entries)
           updateOrders(response.data.entries);
       })
      }, []);
    const renderOrder = (data) => {
        const renderList = (list ,index) =>{
            return(
                <div key={index}>
                <br/>
                <div>{list.value.product}</div>
                <div>{list.value.price} kr</div>
                <div>{list.value.aumont} st</div>
                </div>
            )
        }
        let list = data.list.map(renderList);
        return(
            <div key={data._id}>
            
            <hr/>
            <table >
                <tbody>
                    <tr>
                        <td><b>Name:</b> {data.name}</td>
                    </tr>
                    <tr>
                        <td><b>Adress:</b> {data.adress}</td>
                    </tr>
                    
                    <tr>
                        <td>{list}</td>
                    </tr>
                    <tr>
                        <td><b>Total Price:</b> {data.total_price} kr</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        )
    }
    let data = orders.map(renderOrder);
    return(
        
        <div>
        {data}
        </div>
        
    )
}

export default Admin;