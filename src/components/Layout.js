import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (max-width: 1200px){
    padding: 0 10px;
  }

  @media screen and (max-width: 659px){
    padding: 0 15px;
  }
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
