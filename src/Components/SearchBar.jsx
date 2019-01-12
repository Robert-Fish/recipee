import React, { Component } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeActions";

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
      searchValue: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onEnter = e => {
    var element = document.getElementById("recipes");
    console.log(element);
    if (e.key === "Enter") {
      this.props.getRecipes(this.state.searchValue);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  render() {
    console.log(this.props.reff);
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
const mapStateToProps = state => ({
  reff: state.recipes.ref
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(SearchBar);
