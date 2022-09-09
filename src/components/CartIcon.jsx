import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartIcon extends Component {
  state = {
    quantity: '',
  };

  componentDidMount() {
    const addedProducts = JSON.parse(localStorage.getItem('Produtos'));
    this.setState({ quantity: !addedProducts ? 0 : addedProducts.length });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho
        </Link>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      </div>
    );
  }
}
