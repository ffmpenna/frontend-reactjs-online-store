import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddToCartButton from '../components/AddToCartButton';
import CartIcon from '../components/CartIcon';
import Header from '../components/Header';
import RatingForm from '../components/RatingForm';
import { getProductById } from '../services/api';
// import UserReviews from '../components/UserReviews';

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

  addToCart = (product) => {
    const addedProducts = JSON.parse(localStorage.getItem('Produtos'));
    console.log(addedProducts);
    if (!addedProducts) {
      return localStorage.setItem('Produtos', JSON.stringify([product]));
    }
    localStorage.setItem('Produtos', JSON.stringify([...addedProducts, product]));
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { detalhes } = this.state;

    return (
      <div>
        <Header />
        <Container className="product-detailed-container" md={ 2 }>

          <Row>
            <Col>
              <div className="product-detailed" data-testid="product">
                <img
                  data-testid="product-detail-image"
                  src={ detalhes.thumbnail }
                  alt={ detalhes.title }
                  width="400px"
                />
              </div>
            </Col>
            <Col>
              <h4 data-testid="product-detail-name">{detalhes.title}</h4>
              <p
                className="fs-2"
                data-testid="product-detail-price"
              >
                {`R$${detalhes.price}`}
              </p>
              <AddToCartButton product={ detalhes } addToCart={ this.addToCart } />
            </Col>
          </Row>
          <RatingForm id={ id } />
        </Container>

      </div>
    );
  }
}

Cart.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;

export default Cart;
