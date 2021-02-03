import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.li`
    margin-bottom: 20px;
`;

const Review = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const Author = styled.span`
    font-size: 16px;

    & strong{
        font-weight: 700;
    }
`;

const ReviewListItem = ({ review, author }) => {
  return (
    <List>
      <Review>{review}</Review>
      <Author><strong>Author:</strong> {author}</Author>
    </List>
  );
};

ReviewListItem.propTypes = {
  review: PropTypes.string,
  author: PropTypes.string,
}

export default ReviewListItem;
