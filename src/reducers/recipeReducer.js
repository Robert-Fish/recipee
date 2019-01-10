import { GET_RECIPES } from '../actions/types';

const initalState = {
  recipeList: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipeList: action.payload,
      };
    default:
      return state;
  }
}