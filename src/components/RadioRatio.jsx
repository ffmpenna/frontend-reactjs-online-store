import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioRatio extends Component {
  render() {
    const { ratingValue, valueRadio } = this.props;
    return (
      <label htmlFor={ `${ratingValue}-rating` }>
        <input
          data-testid={ `${ratingValue}-rating` }
          id={ `${ratingValue}-rating` }
          type="radio"
          name="rating"
          value={ ratingValue }
          onClick={ () => valueRadio(ratingValue) }
        />
        { ratingValue }
      </label>
    );
  }
}
RadioRatio.propTypes = {
  onInputChange: PropTypes.func,
  ratingValue: PropTypes.number,
}.isRequired;
