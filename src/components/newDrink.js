import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import {Dropdown, DropdownTrigger, DropdownContent} from 'react-simple-dropdown'; 
import {Button, NavItem, Dropdown} from 'react-materialize'


class newDrink extends Component {
    state= {
        thumbnail: '',
        drinkName: '',
        description: '',
        ingredients: '',
        instructions: '',
        liquorType: 'Choose your liquor type',

        // dropdownOpen: false,
    };

    handleThumbnailChange = (e) => {
        this.setState({
          title: e.target.value,
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
      
    //   handleTypeChange = (e) => {
    //     this.setState({
    //       thumbnail: e.target.value,
    //     });
        
    //   };

      handleLiquor = (e) => {
          let selectedLiquor = e.target.text;
          let liquor = selectedLiquor.toLowerCase();
          console.log(this.state)
          this.setState({liquorType: liquor})
      }
    
    
    onFormSubmit = (e)=> {
        e.preventDefault();
        console.log('Form Submit!')
    
        let formData = {
          thumbnail: this.state.img_url,
          drinkName: this.state.drinkName,
          description: this.state.description,
          ingredients: this.state.ingredients,
          instructions: this.state.instructions,
          liquorType: this.state.liquorType,
        };
        console.log("this is the form data:", formData);  
    }

        componentDidMount(newDrink){
        
        axios.post(`http://localhost:3001/liquor_recipes`, newDrink)
        .then((data) => {
          console.log('New recipe :', data);
          this.setState({
            results: newDrink,
          })
        //   this.props.histroy.push('/liquor_types');
        })
        }

    // toggle = () =>{
    //     this.setState(prevState => ({
    //     dropdownOpen: !prevState.dropdownOpen
    //     }));
    //  }

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
                    <input  onChange={ this.handleDescriptionlChange } id="description" type="text" className="description" />
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
