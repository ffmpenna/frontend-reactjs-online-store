import React, { Component } from 'react';

export default class RadioRatio extends Component {
  render() {
    // const { index, onInputChange, rating } = this.props;
    return (
      <label htmlFor="radio">
        <input
          data-testid="1-rating"
          id="radio1"
          type="radio"
          name="rating"
          // value={ rating }
          // onClick={ onInputChange }
        />
        {index}
      </label>
    );
  }
}
