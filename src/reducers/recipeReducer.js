import { GET_RECIPES, GET_RECIPE_BY_CATEGORY } from '../actions/types';

const initalState = {
  recipeList: [],
  ref: 'test',
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipeList: action.payload,
      };
    case GET_RECIPE_BY_CATEGORY:
      return {
        ...state,
        recipeList: action.payload,
      };
    default:
      return state;
  }
}
