import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
      <Container>
        <Row>
          <Col>
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <BsCart4 className="fs-2" />
            </Link>
          </Col>
          <Col>
            <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
