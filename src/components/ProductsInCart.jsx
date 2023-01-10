import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
          <Container className="products-in-cart-container mt-4">
            {cartProducts.map((product) => (
              <Row className="products-in-cart mb-3" key={ product.id }>
                <Col xs lg="2">
                  <img src={ product.thumbnail } alt={ product.title } />
                </Col>
                <Col>
                  <p className="fs-6" data-testid="shopping-cart-product-name">{product.title}</p>
                  <p className="fs-5">{`R$${product.price}`}</p>
                </Col>
              </Row>
            ))}
          </Container>
        )}
      </div>
    );
  }
}
