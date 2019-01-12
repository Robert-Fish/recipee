import React, { Component } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import { getRecipeByCategory } from "../actions/recipeActions";

const HeaderImg = Styled.img`
  max-width: 100%;
  height: auto;
`;

const Icon = Styled.i`
position: absolute;
top: 2.3rem;
left: 10rem;
`;

const Container = Styled.div`
position: relative;
  text-align: center;
  color: white;
`;

const Title = Styled.h1`
position: absolute;
top: 8px;
user-select: none;
left: 16px;
font-family: 'Nunito Sans', sans-serif;
`;

const SubTitle = Styled.h3`
position: absolute;
left: 50%;
text-shadow: 2px 2px 12px black;
top: 28%;
font-size: 3rem;
transform: translate(-50%, -50%);
`;

const Categories = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: #95BF3E;
`;

const Category = Styled.div`
color: #fff;
margin: 0 1rem;
padding: .4rem;
cursor: pointer;
transition: all ease-in-out .3s;

&:hover{
  background: #fff;
  color: #95BF3E;
}
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        "Beef",
        "Chicken",
        "Lamb",
        "Pork",
        "Seafood",
        "Dessert",
        "Miscellaneous.",
        "Pasta",
        "Side",
        "Starter",
        "Vegan",
        "Vegetarian"
      ]
    };
  }

  handleClick = category => {
    var label = document.getElementById("recipes");
    this.props.getRecipeByCategory(category);
    label.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  render() {
    const { categories } = this.state;

    const categoryItem = categories.map(category => (
      <Category key={category} onClick={() => this.handleClick(category)}>
        {category}
      </Category>
    ));
    return (
      <Container>
        <Title>Recipee</Title>
        <Categories>{categoryItem}</Categories>
        <Icon className="fas fa-utensils fa-2x" />
        <SubTitle>What&apos;s on the menu today?</SubTitle>
        <SearchBar />
        <HeaderImg src="https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?" />
      </Container>
    );
  }
}

Header.propTypes = {
  getRecipeByCategory: PropTypes.func.isRequired
};
export default connect(
  null,
  { getRecipeByCategory }
)(Header);
