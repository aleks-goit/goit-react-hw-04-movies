import React from 'react';
import Spinner from 'react-loader-spinner';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SpinerContainer = styled.div`
  display: block;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => (
  <SpinerContainer>
    <Spinner
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </SpinerContainer>
);

export default Loader;
