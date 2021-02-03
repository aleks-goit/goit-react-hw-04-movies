import React, { Component } from 'react';
import CastsList from '../components/CastsList';
import CastsListItem from '../components/CastsListItem';
import Loader from '../components/Loader';
import filmsApi from '../services/filmsApi';
import PropTypes from 'prop-types';

export default class Casts extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  }

  state = {
    actors: null,
  };

  componentDidMount() {
    filmsApi
      .fetchCasts(this.props.movieId)
      .then(casts => this.setState({ actors: casts }));
  }

  render() {
    const { actors } = this.state;
    return (
      <section>
        <CastsList>
          {actors ? (
            actors.length !== 0 ? (
              actors.map(actor => (
                <CastsListItem
                  key={actor.credit_id}
                  actorImage={actor.profile_path}
                  actorName={actor.name}
                  characterName={actor.character}
                />
              ))
            ) : (
              <h2>Actors not found.</h2>
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
        </CastsList>
      </section>
    );
  }
}
