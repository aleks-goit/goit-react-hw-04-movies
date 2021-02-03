import React from 'react';
import styled from 'styled-components';

const ActorsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 759px) {
    justify-content: center;
  }

  @media screen and (max-width: 669px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 420px) {
    justify-content: center;
  }
`;

const CastsList = ({ children }) => {
  return <ActorsList>{children}</ActorsList>;
};

export default CastsList;
