import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Layout from '../components/Layout';
import Casts from '../components/Casts';
import Review from '../components/Review';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import routes from '../routes';
import PropTypes from 'prop-types';

const activeClassName = 'info-nav-active';

const PosterBox = styled.div`
  margin-bottom: 50px;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: ${props =>
    `url(https://image.tmdb.org/t/p/original${props.poster})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

const ArrowBack = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 35px;
  top: 20px;
  left: 20px;
  z-index: 3;
  transition: transform 200ms linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 200ms linear;
  }
`;

const PosterTitle = styled.h2`
  position: relative;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  z-index: 3;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 1025px) {
    padding: 0 10px;
  }
`;

const MainInfoTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 26px;
`;

const InfoBlock = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ItemsList = styled.ul`
  & li {
    display: inline-block;
    margin-right: 5px;

    &::after {
      content: ',';
    }

    &:last-child::after {
      content: '';
      margin-right: 0;
    }
  }
`;

const RatingTitle = styled(InfoTitle)`
  display: inline-block;
  margin-right: 5px;
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: #ffc107;
`;

const MainInfoSection = styled.section`
  width: 40%;
  @media screen and (max-width: 669px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ReviewsNav = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;

const ReviewsSection = styled.section`
  width: 50%;
  @media screen and (max-width: 669px) {
    width: 100%;
  }
`;

const ReviewsNavItem = styled.li`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 700;
  &:last-child {
    margin-right: 0;
  }
`;

const InfoMenu = styled(NavLink).attrs({ activeClassName })`
  padding: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #000;
  border: 2px solid #000;
  border-radius: 15px;

  &.${activeClassName} {
    color: #448aff;
    border-color: #448aff;
  }
`;

const createMovieInfoItems = items =>{
  return items.map(item => <li key={uuidv4()}>{item.name}</li>);
}

function MovieInfo({
  title,
  poster,
  genres,
  companies,
  countries,
  rate,
  overview,
  currentUrl,
  movieId,
  onChangeLocation,
  location
}) {
  const isLocationStateEmpty = location.state === undefined? true : false;
  return (
    <section>
      <PosterBox poster={poster}>
        <ArrowBack
          onClick={() => onChangeLocation(location)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ArrowBack>
        <PosterTitle>{title}</PosterTitle>
      </PosterBox>
      <Layout>
        <MainInfoTitle>Movie info:</MainInfoTitle>
        <InfoSection>
          <MainInfoSection>
            <InfoBlock>
              <InfoTitle>Overview:</InfoTitle>
              <p>{overview ? overview : `Sorry, overview not found...`}</p>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>Genres:</InfoTitle>
              <ItemsList>
                {genres.length !== 0 ? (
                  createMovieInfoItems(genres)
                ) : (
                  <li>Genres not found.</li>
                )}
              </ItemsList>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>Companies:</InfoTitle>
              <ItemsList>
                {companies.length !== 0 ? (
                  createMovieInfoItems(companies)
                ) : (
                  <li>Companies not found.</li>
                )}
              </ItemsList>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>Countries:</InfoTitle>
              <ItemsList>
                {countries.length !== 0 ? (
                  createMovieInfoItems(countries)
                ) : (
                  <li>Countries not found.</li>
                )}
              </ItemsList>
            </InfoBlock>
            <RatingTitle>Rating:</RatingTitle>
            <span>
              <StarIcon icon={faStar} /> {rate}
            </span>
          </MainInfoSection>
          <ReviewsSection>
            <ReviewsNav>
              <ReviewsNavItem>
                <InfoMenu
                  to={{
                    pathname: `${currentUrl}/reviews`,
                    state: !isLocationStateEmpty? { from: location.state.from } : null,
                  }}
                >
                  Reviews
                </InfoMenu>
              </ReviewsNavItem>
              <ReviewsNavItem>
                <InfoMenu
                  to={{
                    pathname: `${currentUrl}/actors`,
                    state: !isLocationStateEmpty? { from: location.state.from } : null,
                  }}
                >
                  Actors
                </InfoMenu>
              </ReviewsNavItem>
            </ReviewsNav>
            <Switch>
              <Route
                path={routes.actors}
                render={props => <Casts {...props} movieId={movieId} />}
              />
              <Route
                path={routes.reviews}
                render={props => <Review {...props} movieId={movieId} />}
              />
            </Switch>
          </ReviewsSection>
        </InfoSection>
      </Layout>
    </section>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  companies: PropTypes.arrayOf(PropTypes.object),
  countries: PropTypes.arrayOf(PropTypes.object),
  rate: PropTypes.number,
  overview: PropTypes.string,
  location: PropTypes.object,
  onChangeLocation: PropTypes.func,
  currentUrl: PropTypes.string,
  movieId: PropTypes.string,
}

export default MovieInfo;
