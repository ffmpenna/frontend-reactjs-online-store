import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import CartDetails from './components/CartDetails';
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
      <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
    </BrowserRouter>
  );
}

export default App;
