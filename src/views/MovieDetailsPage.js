import React, { Component } from 'react';
import MovieInfo from '../components/MovieInfo';
import NotFound from '../views/NotFound';
import Loader from '../components/Loader';
import filmsApi from '../services/filmsApi';
import routes from '../routes';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: false,
  };

  componentDidMount() {
    const { match } = this.props;
    filmsApi
      .fetchFilmById(match.params.movieId)
      .then(movie => this.setState({ movie }))
      .catch(() => this.setState({ error: true }));
  }

  changeLocationPath = location => {
    const {state} = location;

    if(state && state.from){
      return this.props.history.push(state.from);
    }

    return this.props.history.push(routes.home);
  }

  render() {
    const { movie, error } = this.state;
    const {location, match} = this.props;
    return (
      <>
        {error ? (
          <NotFound />
        ) : movie ? (
          <section>
            <MovieInfo
              title={movie.title}
              poster={movie.backdrop_path}
              genres={movie.genres}
              companies={movie.production_companies}
              countries={movie.production_countries}
              rate={movie.vote_average}
              overview={movie.overview}
              location={location}
              onChangeLocation={this.changeLocationPath}
              currentUrl={match.url}
              movieId={match.params.movieId}
            />
          </section>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
