import axios from 'axios';
import { GET_RECIPES } from './types';

// registers user and pushes user to login page with react router withRouter
export const getRecipes = query => (dispatch) => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}
      `,
    )
    .then((res) => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data.meals,
      });
    })
    .catch(err => console.log(err));
};

export const getRecipeByCategory = category => (dispatch) => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
    `,
    )
    .then((res) => {
      console.log(res.data);
    });
};
