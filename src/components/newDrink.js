import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import {Dropdown, DropdownTrigger, DropdownContent} from 'react-simple-dropdown'; 
import {Button, NavItem, Dropdown} from 'react-materialize'


class newDrink extends Component {
    constructor() {
        super();
        this.state= {
            thumbnail: '',
            drinkName: '',
            description: '',
            ingredients: '',
            instructions: '',
            liquorType: 'Choose your liquor type',
            votes: 0,
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);

    }


    handleThumbnailChange = (e) => {
        this.setState({
          thumbnail: e.target.value,
        });
      };
    
      handleDrinkNameChange = (e) => {
        this.setState({
          drinkName: e.target.value,
        });
    
      };
    
      handleDescriptionChange = (e) => {
        this.setState({
          description: e.target.value,
        });
        
      };
    
      handleIngredientsChange = (e) => {
        this.setState({
          ingredients: e.target.value,
        });
        
      };
    
      handleInstructionsChange = (e) => {
        this.setState({
          instructions: e.target.value,
        });
        
      };
      

      handleLiquor = (e) => {
          let selectedLiquor = e.target.text;
          console.log(this.state)
          this.setState({liquorType: selectedLiquor})
      }
    
    
    onFormSubmit = (e)=> {
        e.preventDefault();
        // axios.post(`http://localhost:3001/liquor_recipes`, {
// // Heroku:
        axios.post(`https://pyp-backend.herokuapp.com/liquor_recipes`, {


            img_url: this.state.thumbnail,
            drinkName: this.state.drinkName,
            description: this.state.description,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            liquorType: this.state.liquorType,
            votes: this.state.votes,
        }).then( (res) => {
            console.log("server res: ", res.data._id);
            console.log('props history', this.props);
            this.props.history.push(`/liquor_recipes/${res.data._id}`);

        })
   
    }


      render(){

      
        return(
      <div>
        <div className="row">
            <form onSubmit={this.onFormSubmit} className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input onChange={ this.handleThumbnailChange } id="img_url" type="text" className="img_url" />
                  <label htmlFor="thumbnail">Sumbit a link of your image</label>
                </div>
                <div className="input-field col s12">
                    <input onChange={ this.handleDrinkNameChange } id="drink_name" type="text" className="drink_name" />
                    <label htmlFor="drink_name">Name your Drink</label>
                  </div>
                <div className="input-field col s12">
                    <input  onChange={ this.handleDescriptionChange } id="description" type="text" className="description" />
                    <label htmlFor="description">What's it like?</label>
                </div>
                <div className="input-field col s12">
                    <input onChange={ this.handleIngredientsChange } id="ingredients" type="text" className="ingredients" />
                    <label htmlFor="ingredients">What do you need?</label>
                </div>
                <div className="input-field col s12">
                    <input  onChange={ this.handleInstructionsChange } id="instructions" type="text" className="instructions" />
                    <label htmlFor="instructions">How do you make it?</label>
                
                </div>

                <div className="input-field col s12">
  
                   
                </div>
                        <div>
                            <Dropdown trigger={
                                <Button>{this.state.liquorType}</Button>
                            }>
                            <NavItem onClick={this.handleLiquor}>Whiskey</NavItem>
                            <NavItem onClick={this.handleLiquor}>Vodka</NavItem>
                            <NavItem onClick={this.handleLiquor}>Gin</NavItem>
                            <NavItem onClick={this.handleLiquor}>Brandy</NavItem>
                            <NavItem onClick={this.handleLiquor}>Tequila</NavItem>
                            <NavItem onClick={this.handleLiquor}>Rum</NavItem>
                            </Dropdown>
                        </div>
                <button className="waves-effect waves-light grey btn create-btn" type="submit" name="action">Submit your drink!</button>
    
                
              </div>
            </form>
            </div>
        </div>
        
        )
    }
    
}

export default newDrink;
