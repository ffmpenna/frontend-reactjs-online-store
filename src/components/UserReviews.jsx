import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserReviews extends Component {
  render() {
    const { cartComment } = this.props;

    return (
      <div>
        {
          !cartComment.length ? <p>Nenhum comentario</p>
            : cartComment.map((info, index) => (
              (
                <div key={ `${info.id}${index} ` }>

                  <p data-testid="review-card-email">{info.email}</p>
                  <p data-testid="review-card-rating">{info.text}</p>
                  <p data-testid="review-card-evaluation">{info.rating}</p>
                </div>)))

        }
      </div>

    );
  }
}
UserReviews.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;
