import React, { Component } from 'react';
import CartyEmpty from './CartEmpty';

export default class ProductsInCart extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    const addedProducts = JSON.parse(localStorage.getItem('Produtos'));
    this.setState({ cartProducts: addedProducts });
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {!cartProducts ? (
          <CartyEmpty />
        ) : (
          cartProducts.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
