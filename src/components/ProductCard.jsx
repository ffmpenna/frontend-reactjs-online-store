import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import AddToCartButton from './AddToCartButton';

export default class ProductCard extends React.Component {
  render() {
    const { thumbnail, title, price, productId, addToCart, product } = this.props;
    return (
      <Card
        style={ { width: '14rem' } }
        product-id={ productId }
        data-testid="product"
      >
        <a href={ `/productdetails/${productId}` }>
          <Card.Img variant="top" src={ thumbnail } alt={ title } />
        </a>
        <Card.Body>
          <a href={ `/productdetails/${productId}` }>
            <Card.Title title={ title } className="fs-6 text-truncate">
              {title}
            </Card.Title>
          </a>
          <Card.Text>{`R$${price}`}</Card.Text>
          <AddToCartButton addToCart={ addToCart } product={ product } />
        </Card.Body>
      </Card>

    );
  }
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  productId: PropTypes.string,
}.isRequired;
