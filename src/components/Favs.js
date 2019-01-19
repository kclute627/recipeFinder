import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipieItem from './RecipeItem';
import { Link } from 'react-router-dom';


class Favs extends Component {

    state={
        favsLength: true
    }

    render(){
        

        return(
            <div>
                <h4 className='link'><Link to='/'>Home</Link></h4>
                <h4> Favorite Recipie</h4>
                {this.props.favs.map(cur => {
                return(
                    <RecipieItem 
                    key={cur.title} 
                    recipe={cur}
                    favBtn ={false} />
                )
            })}
                

            </div>
            
        )
    }
}



const mapStateToProps = (state) => {

    return{
        favs: state.favoriteRecipes
    }
}


export default connect(mapStateToProps)(Favs)
