import React from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    const result = response.map((item) => item);
    // console.log(result);
    this.setState({ categories: result });
  }

  //   listCategories = async () => {};

  render() {
    const { categories } = this.state;
    const { onInputChange } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <label key={ category.id } data-testid="category" htmlFor={ category.name }>
            {category.name}
            <input
              type="radio"
              value={ category.id }
              onChange={ onInputChange }
              name="inputSelect"
            />
          </label>
        ))}
      </div>

    );
  }
}
