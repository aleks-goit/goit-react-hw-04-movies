import React, { Component } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = styled.form`
  padding: 50px 0;
  text-align: center;
`;

const SearchInput = styled.input`
  margin-right: 10px;
  padding: 10px;
  width: 350px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  font-weight: 700;

  &::placeholder {
    font-size: 15px;
    font-weight: 500;
  }

  @media screen and (max-width: 440px){
    width: 225px;
  }
`;

const SearchButton = styled.button`
  font-size: 20px;
  color: #a6a6a6;
  border: none;
  background-color: transparent;
  transition: transform 200ms linear;
  outline: none;

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
    transition: transform 200ms linear;
  }
`;

export default class Search extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleFormSubmit}>
        <SearchInput
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder="Enter movie name..."
          autoFocus
        />
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchForm>
    );
  }
}
