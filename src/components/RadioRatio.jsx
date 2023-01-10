import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class RadioRatio extends Component {
  render() {
    const { ratingValue, valueRadio } = this.props;
    return (
      <Form.Check
        className="mb-3"
        inline
        label={ ratingValue }
        name="rating"
        type="radio"
        data-testid={ `${ratingValue}-rating` }
        id={ `${ratingValue}-rating` }
        onClick={ () => valueRadio(ratingValue) }
      />

    );
  }
}
RadioRatio.propTypes = {
  onInputChange: PropTypes.func,
  ratingValue: PropTypes.number,
}.isRequired;
