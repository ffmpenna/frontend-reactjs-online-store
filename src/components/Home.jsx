import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';

export default class Home extends React.Component {
  state = {
    querryInput: '',
    products: undefined,
    inputSelect: '',
  };

  searchProductByQuerry = async () => {
    const { querryInput, inputSelect } = this.state;
    const response = await getProductsFromCategoryAndQuery(inputSelect, querryInput);
    this.setState({ products: response.results });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.searchProductByQuerry);
  };

  render() {
    const { products, inputSelect } = this.state;
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
            inputSelect={ inputSelect }
            onInputChange={ this.onInputChange }
          />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {products === undefined ? (
          <p>Nenhum produto foi encontrado</p>
        ) : (
          products.map(({ thumbnail, title, price, id }) => (
            <ProductCard
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              productId={ id }
              key={ id }
            />
          ))
        )}
      </div>
    );
  }
}
