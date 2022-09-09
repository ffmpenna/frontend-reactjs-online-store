import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';

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
    this.setState({
      [name]: value,
    }, this.searchProductByQuerry);
  };

  render() {
    const { products, categorySelected } = this.state;
    return (
      <div>
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
          products.map(({ thumbnail, title, price, id }) => (
            <Link
              key={ id }
              to={ `/productdetails/${id}` }
              data-testid="product-detail-link"
            >
              <ProductCard
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                productId={ id }
                key={ id }
              />
            </Link>
          ))
        )}
      </div>
    );
  }
}
