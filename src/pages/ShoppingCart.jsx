import React, { Component } from 'react';
import Header from '../components/Header';
import ProductsInCart from '../components/ProductsInCart';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductsInCart />
      </div>
    );
  }
}
