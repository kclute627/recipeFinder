import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom'




class RecipeList extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.favoriteRecipes.length > 0 ?
                    <h4 className='link'><Link to='/favs'>Fav Recipes</Link></h4>
                    :
                    <div></div>


                }
                

                {
                    this.props.recipes.map(cur => {
                        return (
                            <RecipeItem 
                            key={cur.href} 
                            recipe={cur}
                            favBtn= {true}/>
                            
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{

    return state;
}



export default connect(mapStateToProps, null)(RecipeList);







