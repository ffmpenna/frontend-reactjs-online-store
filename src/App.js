import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartDetails from './pages/CartDetails';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route
          path="/productdetails/:id"
          render={ (props) => <CartDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
