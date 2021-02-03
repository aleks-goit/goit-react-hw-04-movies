import React from 'react';
import NotFoundActorImg from '../assets/NotFoundActor.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.li`
  width: 40%;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 759px){
    width: 70%;
  }

  @media screen and (max-width: 669px){
    width: 45%;
  }

  @media screen and (max-width: 420px){
    width: 100%;
  }
`;

const ActorImage = styled.img`
  margin-bottom: 15px;
`;

const ActorName = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;

  & span {
    font-weight: 500;
  }
`;

const ActorCharacter = styled.p`
  font-size: 18px;

  & strong {
    font-weight: 700;
  }
`;

const CastsListItem = ({ actorImage, actorName, characterName }) => {
  const actorImageRef = `https://image.tmdb.org/t/p/original${actorImage}`;
  return (
    <List>
      <ActorImage
        src={actorImageRef.includes('null') ? NotFoundActorImg : actorImageRef}
        alt={actorName}
      />
      <ActorName>
        Name: <span>{actorName}</span>
      </ActorName>
      <ActorCharacter>
        <strong>Character:</strong> {characterName}
      </ActorCharacter>
    </List>
  );
};

CastsListItem.propTypes = {
  actorImage: PropTypes.string,
  actorName: PropTypes.string,
  characterName: PropTypes.string,
}

export default CastsListItem;
