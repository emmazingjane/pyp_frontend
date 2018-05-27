import React, { Component } from 'react';
import CocktailModel from '../models/CocktailModel';
import { Link } from 'react-router-dom';

class SingleLiquorType extends Component {
    state = {
        results: null,
    };

    componentDidMount() {
        let liquorRecipeId = this.props.match.params.liquorRecipe.type;
        CocktailModel.findRecipes(liquorRecipeId)
        .then(data => {
          console.log('SingleCocktail by ID: ', data);
          this.setState({
            liquorRecipe: data.data
          });
        });
      }

    incrementVote = (liquorRecipeId) => {
        console.log(('liquorRecipeId', (liquorRecipeId)))

        let recipeToUpdate = this.state.results.filter(result => result.type ===(liquorRecipeId))
        let updatedVotes = recipeToUpdate[0].votes + 1;
        let recipe = {...recipeToUpdate[0], votes: updatedVotes};

        CocktailRecipeModel.voteUpdate(liquorRecipeId, recipe)
        .then(updatedRecipe => {
          let updatedRecipes = this.state.results.filter(recipe => recipe.type !==(liquorRecipeId));
          let returnedRecipe = updatedRecipe.data;
          let newRecipes = updatedRecipes.concat(returnedRecipe);
          this.setState({ results: newRecipes })
        });
    }


    render(){

        let results = this.state.results !== null ? this.state.results
        .sort((a,b) => {
            return b.votes - a.votes;
        })

        .map(liquorRecipes => {
            console.log('dranks', liquorRecipes)

            return (
                <div className="header">
                <h3>{this.liquorRecipes.type}</h3>
                 </div>
              
                    <section className="recipes">
                    
                                <div className="card horizontal">
                                <div className="card-image">
                                    <img src={this.liquorRecipes.image_url} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                    <h5>{this.liquorRecipes.drinkName}</h5>
                                    <p>{this.liquorRecipes.description}</p>      
                                    </div>
                                    <div className="card-action">
                                    <a href="./single_recip.html">Make me</a>
                                    <p>{this.liquorRecipes.votes} votes</p>
                                    <div className="rate">
                                    <button onClick={()=>this.incrementVote         (recipe._id)} className="btn-floating       btn-small waves-effect waves-light             green"><i className="material-icons">        +</i></button>
                                        {/* <a href="./single_recip.html">rate me</a> */}
                                        <button onClick={()=>this.decrementVote(liquorRecipeId._id)} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">-</i></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </section>
            );
                                    
        
        })
    }

}


export default SingleLiquorType;
