import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';




class RecipeList extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.recipes.map(cur => {
                        return (
                            <RecipeItem key={cur.href} recipe={cur}/>
                            
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







