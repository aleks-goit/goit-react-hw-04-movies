import React, { Component } from 'react';
import TrendFilmsItem from './FilmItem';
import Loader from './Loader';
import Layout from './Layout';
import styled from 'styled-components';
import filmsApi from '../services/filmsApi';
import PropTypes from 'prop-types';

const FilmList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1025px) {
    justify-content: center;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 32px;

  @media screen and (max-width: 979px){
    text-align: center;
  }
`;

export default class TrendFilms extends Component {
  static proptTypes = {
    location: PropTypes.object,
  }

  state = {
    films: [],
  };

  componentDidMount() {
    this.getTrendsFilms();
  }

  getTrendsFilms = () => {
    filmsApi.fetchTrendsFilms('week').then(films => this.setState({ films }));
  };

  render() {
    const { films } = this.state;
    return (
      <>
        {films.length > 0 ? (
          <Layout>
            <SectionTitle>Best of the week</SectionTitle>
            <FilmList>
              {films.map(film => (
                <TrendFilmsItem
                  key={film.id}
                  title={film.title ? film.title : film.name}
                  image={film.poster_path}
                  rating={film.vote_average}
                  movieId={film.id}
                  location={this.props.location}
                />
              ))}
            </FilmList>
          </Layout>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
