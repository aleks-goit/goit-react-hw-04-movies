import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import NotFoundActorImg from '../assets/NotFoundActor.png';
import PropTypes from 'prop-types';

const FilmContainer = styled.li`
  max-width: 250px;
  margin-bottom: 40px;
  transition: transform 200ms;

  &:hover{
    transform: scale(1.05);
    transition: transform 200ms;
  }

  @media screen and (max-width: 1025px) {
    max-width: 300px;
    margin: 0 10px 40px 10px;
  }

  @media screen and (max-width: 979px){
    max-width: 400px;
  }

  @media screen and (max-width: 860px){
    max-width: 300px;
  }

  @media screen and (max-width: 659px){
    max-width: 400px;
    margin: 0 0 40px 0;
  }
`;

const FilmInfo = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const FilmTitle = styled.h2`
  font-size: 18px;
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: #FFC107;
`;

const MovieLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

function trimTitle(string) {
  if (string.length > 20) {
    return string.substring(0, 20) + '...';
  }

  return string;
}

const TrendFilmsItem = ({ title, image, rating, movieId, location }) => {
  const previewImageRef = `https://image.tmdb.org/t/p/original${image}`;

  return (
    <FilmContainer>
      <MovieLink to={{
        pathname: `movies/${movieId}`,
        state: {from: location}
      }}>
      <img
        src={previewImageRef.includes(null)? NotFoundActorImg : previewImageRef}
        alt={`${title} poster`}
      />
      <FilmInfo>
        <FilmTitle>{trimTitle(title)}</FilmTitle>
        <span><StarIcon icon={faStar}/> {rating}</span>
      </FilmInfo>
      </MovieLink>
    </FilmContainer>
  )
};

TrendFilmsItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  movieId: PropTypes.number,
  location: PropTypes.object,
}

export default TrendFilmsItem;
