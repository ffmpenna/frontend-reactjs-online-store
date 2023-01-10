import React, { Component } from 'react';
import { Stack } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
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
      <Stack direction="horizontal" gap={ 3 }>

        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <BsCart4 className="fs-2" />
        </Link>

        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      </Stack>

    );
  }
}
