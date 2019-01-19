import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
import '../style/index.css';




class App extends Component {


    render(){

        return(
            <div>
                <h2>
                Recipe Finder
                </h2>
                <SearchRecipes />
                <RecipeList />
                


            </div>
            
        )
    }
}


export default App;