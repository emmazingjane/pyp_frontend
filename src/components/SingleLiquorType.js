import React, { Component } from 'react';
import CocktailModel from '../models/CocktailModel';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleLiquorType extends Component {
    state = {
        results: [],
    };




    componentDidMount() {
        let id = this.props.match.params.liquor_id;
        axios.get(`http://localhost:3001/liquor_types/${id}`)
        .then(data => {
          console.log('SingleCocktail by ID: ', data.data._id);
          this.setState({
            results: data.data
          });
      });
    }

    // incrementVote = (liquorRecipeId) => {
    //     console.log(('liquorRecipeId', (liquorRecipeId)))

    //     let recipeToUpdate = this.state.results.filter(result => result.type ===(liquorRecipeId))
    //     let updatedVotes = recipeToUpdate[0].votes + 1;
    //     let recipe = {...recipeToUpdate[0], votes: updatedVotes};

    //     CocktailModel.voteUpdate(liquorRecipeId, recipe)
    //     .then(updatedRecipe => {
    //       let updatedRecipes = this.state.results.filter(recipe => recipe.type !==(liquorRecipeId));
    //       let returnedRecipe = updatedRecipe.data;
    //       let newRecipes = updatedRecipes.concat(returnedRecipe);
    //       this.setState({ results: newRecipes })
    //     });
    // }


    render(){

    // let results = this.state.results !== null ? this.state.results
    //     .sort((a,b) => {
    //         return b.votes - a.votes;
    //     })

    // let results = this.state.results ? this.state.results.map(liquorRecipes => {
    //         console.log('dranks', liquorRecipes)

    //         return(
        
    //         <div>
              
    //                 <section className="recipes">
                    
    //                             <div className="card horizontal">
    //                                 <div className="card-image">
    //                                     {/* <img src={this.liquorRecipes.image_url} /> */}
    //                                 </div>
    //                                 <div className="card-stacked">
    //                                     <div className="card-content">
    //                                         <h5>{this.liquorRecipeId.drinkName}</h5>
    //                                         <p>{this.liquorRecipeId.description}</p>      
    //                                     </div>
    //                                     <div className="card-action">
    //                                         <a href="./single_recip.html">Make me</a>

    //                                         <p>{this.liquorRecipeId.votes} votes</p>

    //                                         <div className="rate">
    //                                             <button onClick={()=>this.incrementVote(this.state.results.liquor_recipe._id)} className="btn-floating btn-small waves-effect waves-light green"><i className="material-icons">+</i></button>
                                                
    //                                             <button onClick={()=>this.decrementVote(this.state.results.liquor_recipe._id)} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">-</i></button>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
                        
    //                 </section>
    //         </div>
    //         )
           
            
    //     })
    //     : <h3>Loading...</h3>
                                    

        let results = <h3>Single Liquor Type</h3>
        return (
            <div>
                {results}
            </div>
        )
    

    }
}




export default SingleLiquorType;
