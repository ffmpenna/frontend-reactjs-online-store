import React from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import CategoriesList from '../components/CategoriesList';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  state = {
    querryInput: '',
    products: undefined,
    categorySelected: '',
  };

  searchProductByQuerry = async () => {
    const { querryInput, categorySelected } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      categorySelected,
      querryInput,
    );
    this.setState({ products: response.results });
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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>TrybeShop</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                name="querryInput"
                onChange={ this.onInputChange }
                type="search"
                placeholder="O que você procura?"
                data-testid="query-input"
                className="me-2"
              />
              <CategoriesList
                categorySelected={ categorySelected }
                onInputChange={ this.onCategoryChange }
              />
              <Button
                type="button"
                onClick={ this.searchProductByQuerry }
                data-testid="query-button"
                variant="outline-success"
              >
                Pesquisar
              </Button>
            </Form>
            <Navbar.Text>
              <CartIcon />
            </Navbar.Text>
          </Container>
        </Navbar>
        <div />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {products === undefined ? (
          <p>Nenhum produto foi encontrado</p>
        ) : (
          products.map((product) => (
            <div key={ `div${product.id}` }>
              <Link
                key={ product.id }
                to={ `/productdetails/${product.id}` }
                data-testid="product-detail-link"
              >
                <ProductCard
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                  productId={ product.id }
                  key={ product.id }
                />
              </Link>
              <button
                key={ `button${product.id}` }
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addToCart(product) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}
