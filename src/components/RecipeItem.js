import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions/index';


class RecipeItem extends Component {

    state ={
        favorite: false
    }

   favorite = (recipe)=>{
        this.props.favoriteRecipe(recipe);
        this.setState({favorite: true})
    }

    render(){

        let { recipe }= this.props;

        return(
            <div className = 'recipe-item'>
            {
                this.props.favBtn ?
                
                    this.state.favorite ? 
                    <div className="star1">&#9733;</div>
                    :
                    <div 
                        onClick={()=>this.favorite(recipe)}
                        className= 'star'>
                        &#9734;
                    </div>
    
                
                :
                <div></div>

            }
            
            
            <div className='recipe-text' >
                <a href={recipe.href}>
                <h4>{recipe.title}</h4>
                </a>
                <p>
                    {recipe.ingredients}
                </p>
                
            </div>
            <img 
            src={recipe.thumbnail} 
            alt = {recipe.title}
            className = 'recipe-img'/>
            </div>
            
        )
    }
}

export default connect(null, { favoriteRecipe })(RecipeItem);