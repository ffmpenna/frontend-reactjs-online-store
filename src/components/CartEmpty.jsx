import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BsCartX } from 'react-icons/bs';

export default class CartyEmpty extends Component {
  render() {
    return (
      <Container className="empty-cart">
        <BsCartX className="empty-cart-icon" />
        <h1>SEU CARRINHO ESTÁ VAZIO</h1>
      </Container>

    );
  }
}
