import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import ProductCard from '../components/ProductCard';
import CartIcon from '../components/CartIcon';

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
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
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
        <CartIcon />
        <div>
          <input
            name="querryInput"
            onChange={ this.onInputChange }
            type="text"
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ this.searchProductByQuerry }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <div>
          <CategoriesList
            categorySelected={ categorySelected }
            onInputChange={ this.onCategoryChange }
          />
        </div>
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
