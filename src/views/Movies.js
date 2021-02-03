import React, { Component } from 'react';
import Search from '../components/Search';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import FilmItem from '../components/FilmItem';
import parseQuery from '../utils/parseQueryString';
import filmsApi from '../services/filmsApi';
import styled from 'styled-components';

const FilmList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export default class Movies extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    const { query } = parseQuery(this.props.location.search);
    this.setState({ isLoading: true });

    if (query) {
      filmsApi
        .fetchFilmsByQuery(query)
        .then(data => this.setState({ movies: data, isLoading: false }));
      return;
    }

    filmsApi.fetchTrendsFilms('day').then(data => this.setState({ movies: data, isLoading: false }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQuery(prevProps.location.search);
    const { query: nextQuery } = parseQuery(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ isLoading: true });
      filmsApi
        .fetchFilmsByQuery(nextQuery)
        .then(data => this.setState({ movies: data, isLoading: false }));
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <section>
        <Search onSubmit={this.handleChangeQuery} />
        <Layout>
          {movies && (
            <FilmList>
              {movies.map(film => (
                <FilmItem
                  key={film.id}
                  title={film.title ? film.title : film.name}
                  image={film.poster_path}
                  rating={film.vote_average}
                  movieId={film.id}
                  location={this.props.location}
                />
              ))}
            </FilmList>
          )}
          {isLoading && <Loader />}
        </Layout>
      </section>
    );
  }
}
