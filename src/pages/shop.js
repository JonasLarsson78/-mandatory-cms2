import React from 'react';

import Meny from '../components/meny.js';
import Header from '../components/header.js';
import ShopList from '../components/shopList.js';




const Shop = (props) => {
    const page =  props.match.params.page;

    return(
        <>
        <Header/>
        <Meny/>
        <ShopList page={page}/>
        </>
    );
}

export default Shop;