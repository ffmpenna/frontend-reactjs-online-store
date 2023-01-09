import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
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

      <Form.Select onChange={ onInputChange } className="me-2">
        <option>
          Escolha uma categoria...
        </option>

        {categories.map((category) => (
          <option
            key={ category.id }
            data-testid="category"
            value={ category.id }
          >
            {category.name}
          </option>
        ))}
      </Form.Select>

    );
  }
}

CategoriesList.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;
