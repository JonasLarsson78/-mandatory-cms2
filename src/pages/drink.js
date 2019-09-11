import React from 'react';

import Meny from '../components/meny.js';
import Header from '../components/header.js';
import DrinkList from '../components/drinkList.js';




const Drink = (props) => {
    const page =  props.match.params.page;

    return(
        <>
        <Header/>
        <Meny/>
        <DrinkList page={page}/>
        </>
    );
}

export default Drink;