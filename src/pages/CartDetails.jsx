import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import CartIcon from '../components/CartIcon';
import Form from '../components/Form';

class Cart extends React.Component {
  state = {
    detalhes: '',
  };

  async componentDidMount() {
    await this.getDetalhes();
  }

  getDetalhes = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const received = await getProductById(id);
    this.setState({ detalhes: received });
  };

  render() {
    const { detalhes } = this.state;
    return (
      <div>
        <CartIcon />
        <div data-testid="product">
          <p data-testid="product-detail-name">{detalhes.title}</p>
          <img
            data-testid="product-detail-image"
            src={ detalhes.thumbnail }
            alt={ detalhes.title }
          />
          <p data-testid="product-detail-price">{detalhes.price}</p>
        </div>
        <Form />
      </div>
    );
  }
}

Cart.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;

export default Cart;
