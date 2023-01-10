import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';

export default class UserReviews extends Component {
  render() {
    const { cartComment } = this.props;

    return (
      <div>
        {
          !cartComment.length ? <p>Nenhum comentario</p>
            : <Container className="comment-area">
              <h5>Avaliações</h5>
              {cartComment.map((info, index) => (
                (
                  <div className="comment mb-3" key={ `${info.id}${index} ` }>
                    <div>
                      <p
                        className="fs-4"
                        data-testid="review-card-email"
                      >
                        {`Usuário: ${info.email}`}
                      </p>
                    </div>
                    <Container>

                      <p
                        className="text-break"
                        data-testid="review-card-rating"
                      >
                        {info.text}
                      </p>
                      <Stack
                        gap={ 2 }
                        direction="horizontal"
                        className="d-flex align-items-center"
                      >
                        <BsStarFill />
                        <span data-testid="review-card-evaluation">
                          {info.rating}
                        </span>
                      </Stack>

                    </Container>
                  </div>)))}
              </Container>

        }
      </div>

    );
  }
}
UserReviews.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;
