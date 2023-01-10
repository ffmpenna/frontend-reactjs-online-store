import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  state = {
    querryInput: '',
    products: undefined,
    categorySelected: '',
  };

  async componentDidMount() {
    const response = await getProductsFromCategoryAndQuery();
    this.setState({ products: response });
  }

  searchProductByQuerry = async () => {
    const { querryInput, categorySelected } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      categorySelected,
      querryInput,
    );
    this.setState({ products: response });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onCategoryChange = ({ target }) => {
    const { value } = target;
    this.setState(
      {
        categorySelected: value,
      },
      this.searchProductByQuerry,
    );
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
    const { products, categorySelected } = this.state;
    return (
      <div>
        <Header
          onCategoryChange={ this.onCategoryChange }
          searchProductByQuerry={ this.searchProductByQuerry }
          categorySelected={ categorySelected }
          onInputChange={ this.onInputChange }
          showSearch
        />
        <div />
        {products === undefined ? (
          <p>Nenhum produto foi encontrado</p>
        ) : (
          <Container className="d-flex p-3">

            <Row xs={ 1 } md={ 2 } className="g-4">
              {
                products.results.map((product) => (
                  <ProductCard
                    title={ product.title }
                    thumbnail={ product.thumbnail }
                    price={ product.price }
                    productId={ product.id }
                    key={ product.id }
                    addToCart={ this.addToCart }
                    product={ product }
                  />
                ))
              }
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
