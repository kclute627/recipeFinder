import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class SearchRecipe extends Component {

    state = {
        ingredients: '',
        dish: '',

    }

    search = ()=>{
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        
        
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log('recipes', json))
    }

    ingredientHandler = (event) => {
        let ingred = event.target.value;
        
        this.setState({
            ingredients: ingred
        })
    }
    dishHandler = (event) =>{
        let dish= event.target.value;
        this.setState({
            dish,
        })
    }

    render(){
        
    return(
        <Form inline>
            <FormGroup>
                <ControlLabel>Ingredients</ControlLabel>
                {' '}
                <FormControl 
                type='text' 
                placeholder="garlic and Chicken"
                onChange = {this.ingredientHandler}/>    
            </FormGroup>
            {' '}
            <FormGroup>
                <ControlLabel>Dish</ControlLabel>
                {'  '}
                <FormControl 
                type='text' 
                placeholder="adobo"
                onChange = {this.dishHandler}/>
            </FormGroup>
            {' '}
            <Button
            onClick={this.search}>Submit</Button>
        </Form>
    )
    }
}


export default SearchRecipe;