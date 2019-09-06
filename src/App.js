import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Start from './pages/start.js';
import Shop from './pages/shop.js';
import Product from './pages/product.js';
import Cart from './pages/cart.js';
import Done from './pages/done.js';
import './App.css';



function App() {
  return (
    <Router>
      <Route exact path="/" component={Start}/>
      <Route path="/shop/:page" component={Shop}/>  
      <Route path="/product/:id" component={Product}/>
      <Route path="/cart/" component={Cart}/>
      <Route path="/done/" component={Done}/>
    </Router>
  );
}

export default App;
