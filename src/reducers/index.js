import { combineReducers } from 'redux';
import * as actions from '../actions/index';


const recipes=(state=[], action) =>{
    switch(action.type){
        case actions.SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

const favoriteRecipes = (state= [], action)=>{
    switch(action.type){
        case actions.FAVORITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        default:
            return state;

    }
}


const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default  rootReducer;