import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import Meny from '../components/meny.js';
import Header from '../components/header.js';

const Done = () => {

    return(
        <>
        <Header/>
        <Meny/>
        Done!!
        </>
    );
};

export default Done;