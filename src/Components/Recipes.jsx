import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes } from '../actions/recipeActions';

const Container = Styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
grid-template-rows: 1fr 1fr 1fr;
grid-template-areas: ". . . ." ". . . ." ". . . .";



`;

const Recipe = Styled.div`
  background: #fff;
  user-select: none;
  cursor: pointer;
  margin: .4rem;

  h3{
    text-align: center;
    font-weight: 100;
    font-size: 2rem;
  }
  img{
    width: 50%;
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

const AreaLabel = Styled.h4`
background: #95BF3E;
color: #fff;
text-align: center;
font-size: 1.5rem;
padding-top: 10%;
padding-bottom: 10%;
`;

class Recipes extends Component {
  componentDidMount() {
    const { getRecipes } = this.props;
    getRecipes('beef');
  }

  render() {
    const { recipes } = this.props;
    let RecipeItems;
    if (recipes !== undefined) {
      RecipeItems = recipes.map(recipe => (
        <Recipe key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb === '' ? null : recipe.strMealThumb} alt="" />
          <AreaLabel>{recipe.strArea}</AreaLabel>
        </Recipe>
      ));
    } else {
      RecipeItems = <NoRecipe>No Recipe Found</NoRecipe>;
    }

    return (
      <Fragment>
        <TrendingRecipeLabel>Trending Recipes</TrendingRecipeLabel>
        <Container>{RecipeItems}</Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipeList,
});

Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  mapStateToProps,
  { getRecipes },
)(Recipes);
