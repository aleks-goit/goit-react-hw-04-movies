import React, { Component } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewListItem from '../components/ReviewListItem';
import Loader from '../components/Loader';
import filmsApi from '../services/filmsApi';
import PropTypes from 'prop-types';

export default class Review extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  }

  state = {
    reviews: null,
  };

  componentDidMount() {
    filmsApi
      .fetchReview(this.props.movieId)
      .then(data => this.setState({ reviews: data }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <section>
        <ReviewList>
          {reviews ? (
            reviews.length !== 0 ? (
              reviews.map(review => (
                <ReviewListItem
                  key={review.id}
                  review={review.content}
                  author={review.author}
                />
              ))
            ) : (
              <h2>Reviews not found.</h2>
            )
          ) : (
            <section
              style={{
                position: 'relative',
                margin: '0 auto',
              }}
            >
              <Loader />
            </section>
          )}
        </ReviewList>
      </section>
    );
  }
}
