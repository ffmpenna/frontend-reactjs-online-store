import React, { Component } from 'react';
import RadioRatio from './RadioRatio';

export default class Form extends Component {
  state = {
    email: '',
    textarea: '',
    rating: '',
    messageError: false,
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validaCampos = (event) => {
    event.preventDefault();
    const pattern = /\S+@\S+\.\S+/;

    const { email, rating } = this.state;
    if (!email.match(pattern) || !rating) {
      return this.setState({ messageError: true });
    }
    return this.setState({ email: '', textarea: '', rating: '', messageError: false });
  };

  render() {
    // const rows = [];
    // const number = 6;
    // for (let i = 1; i < number; i += 1) {
    //   rows.push(i);
    // }
    const { email, textarea, messageError, rating } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="product-detail-email"
            type="email"
            name="email"
            value={ email }
            id="email"
            onChange={ this.onInputChange }
          />
        </label>
        {/* {
          rows.map((num) => (<RadioRatio
            key={ `radio${num}` }
            rating={ rating }
            onInputChange={ this.onInputChange }
            index={ num }
          />))
        } */}
        <label htmlFor="textArea">
          <textarea
            data-testid="product-detail-evaluation"
            name="textarea"
            value={ textarea }
            id="textArea"
            cols="30"
            rows="10"
            onChange={ this.onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ this.validaCampos }

        >
          Avaliar

        </button>
        {messageError && <span data-testid="error-msg">Campos inválidos</span> }
      </form>
    );
  }
}
