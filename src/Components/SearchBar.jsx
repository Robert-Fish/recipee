import React, { Component } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';
import { APP_KEY } from '../keys';

const SearchBarInput = Styled.input`
width: 30%;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);

// Remove default styling
outline: none;
border: .3rem solid #fff;
height: 2rem;


text-indent: 1rem;
font-size: 1.3rem;
padding: .3rem;

&:hover{

  transition: all ease-in-out .2s;
  
}

&:focus{
  font-weight: bold;
}
`;

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.getRecipes(this.state.searchValue);
  };

  // onEnter = e => {
  //   if (e.key === 'Enter') {
  //     this.props.getRecipes(this.state.searchValue);
  //   }
  // };
  render() {
    return (
      <SearchBarInput
        placeholder="Search a Recipe"
        autoFocus
        value={this.state.searchValue}
        onKeyPress={this.onEnter}
        onChange={this.onChange}
        name="searchValue"
      />
    );
  }
}

export default connect(
  null,
  { getRecipes },
)(SearchBar);
