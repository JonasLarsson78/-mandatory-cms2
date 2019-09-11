import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Start from './pages/start.js';
import Shop from './pages/shop.js';
import Product from './pages/product.js';
import Cart from './pages/cart.js';
import Done from './pages/done.js';
import Send from './components/send.js'
import Contact from './pages/contact.js'
import About from './pages/about.js';
import Checkout from './pages/checkout.js';
import SendForm from './pages/send_form.js';
import Admin from './pages/admin.js';
import Drink from './pages/drink.js';
import './App.css';



function App() {
  return (
    <Router>
      <Route exact path="/" component={Start}/>
      <Route path="/shop/:page" component={Shop}/>
      <Route path="/drink/:page" component={Drink}/>   
      <Route path="/product/:id" component={Product}/>
      <Route path="/cart/" component={Cart}/>
      <Route path="/done/" component={Done}/>
      <Route path="/send/" component={Send}/>
      <Route path="/contact/" component={Contact}/>
      <Route path="/about/" component={About}/>
      <Route path="/checkout/" component={Checkout}/>
      <Route path="/sendform/" component={SendForm}/>
      <Route path="/admin/" component={Admin}/>
    </Router>
  );
}

export default App;
