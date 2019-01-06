import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { APP_ID, APP_KEY } from '../keys';

const Container = Styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
grid-template-rows: 1fr 1fr 1fr;
grid-template-areas: ". . . ." ". . . ." ". . . .";
grid-gap: .5rem;


`;

const Recipe = Styled.div`
  background: #fff;
  user-select: none;
  cursor: pointer;
  padding: 1rem;
  h3{
    text-align: center;
    font-weight: 100;
    font-size: 2rem;
  }
  img{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
   
  
  }

  &:hover{
    background: #A9A9A9;
    transition: all ease-in-out .3s;
    h3{
      font-weight: bold;
      color:  #fff;
    }
   
  }
`;

const NoRecipe = Styled.h3`
text-align: center;
font-size: 2rem;
font-family: 'Nunito Sans', sans-serif;
`;

const TrendingRecipeLabel = Styled.h3`
text-align: center;
font-size: 2.8rem;
text-decoration: underline;

`;
export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.edamam.com/search?q=pork&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`)
      .then(res => this.setState({
        recipes: res.data.hits,
      }))
      .catch(
        this.setState({
          recipes: null,
        }),
      );
  }

  render() {
    const { recipes } = this.state;
    if (recipes === null) {
      return <NoRecipe>No Recipes Found</NoRecipe>;
    }

    const RecipeItems = recipes.map(recipe => (
      <Recipe key={recipe.recipe.label}>
        <h3>{recipe.recipe.label}</h3>
        <img src={recipe.recipe.image} alt="" />
      </Recipe>
    ));

    return (
      <Fragment>
        <TrendingRecipeLabel>Trending Recipes</TrendingRecipeLabel>
        <Container>{RecipeItems}</Container>
      </Fragment>
    );
  }
}
