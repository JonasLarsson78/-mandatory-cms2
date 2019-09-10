import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';



const Header = () => {
    const [re, updateRe] = useState(false);
    const admin = () =>{
        updateRe(true);
    }
    if (re){
    return(
        <Redirect to="/admin/"/>
    )
    }

    return(
        
            <div className="header">
            <img alt="header" style={{width: "180px", marginLeft: "80px"}} src={require("../img/pizza_logo.png")}/>
            <button onClick={admin} style={{position: "absolute", top: "0px", right: "0px", height: "20px", width: "100px", background: "transparent", border: "none", outline: "none"}}>.</button>
            </div>
        
    );
}

export default Header;