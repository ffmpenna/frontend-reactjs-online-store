import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AddToCartButton extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <Button
        type="button"
        variant="dark"
        data-testid="product-add-to-cart"
        onClick={ () => addToCart(product) }
      >
        Adicionar ao Carrinho
      </Button>
    );
  }
}
