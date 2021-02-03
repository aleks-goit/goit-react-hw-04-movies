import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imagePath from '../assets/bg.jpg';

const NotFoundContainer = styled.div`
  max-width: 410px;
  width: 100%;
  text-align: center;

  & .not-found-404 {
    height: 280px;
    position: relative;
    z-index: -1;

    & h1 {
      font-size: 230px;
      margin: 0px;
      font-weight: 900;
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      background: url(${imagePath}) no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: cover;
      background-position: center;
    }
  }

  & h2{
    color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  }

  & p{
    color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 0px;
  }
`;

const MainContainer = styled.div`
  position: relative;
  height: 100vh;

  & ${NotFoundContainer} {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const HomePageLink = styled(Link)`
    font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #0046d5;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  -webkit-box-shadow: 0px 4px 15px -5px #0046d5;
          box-shadow: 0px 4px 15px -5px #0046d5;
`;

const NotFound = () => (
  <MainContainer>
    <NotFoundContainer>
      <div className="notfound-404">
        <h1>Oops!</h1>
      </div>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <HomePageLink to="/">Go To Homepage</HomePageLink>
    </NotFoundContainer>
  </MainContainer>
);

export default NotFound;
