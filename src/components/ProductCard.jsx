import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { thumbnail, title, price, productId } = this.props;
    return (

      <div
        product-id={ productId }
        data-testid="product"
      >
        <p>{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>

    );
  }
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  productId: PropTypes.string,
}.isRequired;
