import React, { Component } from 'react';
import CartIcon from '../components/CartIcon';
import ProductsInCart from '../components/ProductsInCart';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <CartIcon />
        <ProductsInCart />
      </div>
    );
  }
}
