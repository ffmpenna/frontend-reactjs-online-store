import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    const result = response.map((item) => item);
    this.setState({ categories: result });
  }

  render() {
    const { categories } = this.state;
    const { onInputChange } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <label
            key={ category.id }
            data-testid="category"
            htmlFor={ category.name }
          >
            <input
              type="radio"
              value={ category.id }
              onChange={ onInputChange }
              name="categorySelected"
              id={ category.name }
            />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;
