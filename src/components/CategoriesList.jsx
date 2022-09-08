import React from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    const names = response.map((item) => item.name);
    this.setState({ categories: names });
  }

  //   listCategories = async () => {};

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <label key={ category } data-testid="category" htmlFor={ category }>
            {category}
            <input type="radio" name={ category } />
          </label>
        ))}
      </div>
    );
  }
}
