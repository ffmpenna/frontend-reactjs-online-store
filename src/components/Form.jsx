import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioRatio from './RadioRatio';
import UserReviews from './UserReviews';

export default class Form extends Component {
  state = {
    email: '',
    text: '',
    rating: '',
    messageError: false,
    cartComment: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const { id } = this.props;
    console.log(id);
    const addedComment = JSON.parse(localStorage.getItem(id));
    this.setState({ cartComment: addedComment || [] });
  };

  saveLocalStorage = ({ email, text, rating }) => {
    const { id } = this.props;
    const addedComment = JSON.parse(localStorage.getItem(id));
    if (!addedComment) {
      this.setState({ cartComment: [{ email, text, rating }] });
      return localStorage.setItem(id, JSON.stringify([{ email, text, rating }]));
    }
    localStorage.setItem(id, JSON.stringify([...addedComment, { email, text, rating }]));
    this.setState({ cartComment: [...addedComment, { email, text, rating }] });
  };

  valueRadio = (ratingValue) => {
    this.setState({ rating: ratingValue });
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

    const { email, rating, text } = this.state;
    if (!email.match(pattern) || !rating) {
      return this.setState({ messageError: true });
    }
    this.saveLocalStorage({ email, text, rating });
    return this.setState({ email: '', text: '', rating: '', messageError: false });
  };

  render() {
    const { email, text, messageError, cartComment } = this.state;
    const { id } = this.props;
    const NUMBER = 5;
    const arrayPositions = Array(NUMBER).fill(0);
    return (
      <form>
        <label htmlFor="email">
          <input
            placeholder="email"
            data-testid="product-detail-email"
            type="email"
            name="email"
            value={ email }
            id="email"
            onChange={ this.onInputChange }
          />
        </label>
        {
          arrayPositions.map((rate, index) => {
            const ratingValue = index + 1;
            return (<RadioRatio
              key={ `inp${rate}${index}` }
              ratingValue={ ratingValue }
              valueRadio={ this.valueRadio }
            />);
          })
        }
        <label htmlFor="textArea">
          <textarea
            data-testid="product-detail-evaluation"
            name="text"
            value={ text }
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
        <UserReviews id={ id } cartComment={ cartComment } />
      </form>
    );
  }
}
Form.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;
