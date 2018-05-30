import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleLiquorType extends Component {
    constructor() {
        super();
        this.state = {
            results: null,
        };
        // this.incrementVote = this.incrementVote.bind(this);
    }
    
    componentDidMount() {
        let id = this.props.match.params.liquor_id;
        axios.get(`http://localhost:3001/liquor_types/${id}`)
        .then(data => {
          console.log('SingleCocktail by ID: ', data);
          this.setState({
            results: data
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
        // .sort((a,b) => {
        //     return b.votes - a.votes;
        // })
        let renderedResults;
        let results = this.state.results;
        if (results === null) {
            renderedResults = <div>Loading...</div>
        } else {
            console.log('results', this.state.results)
            renderedResults = this.state.results.data.map(item => {
                console.log('item', item)


            return(
        
            <div key={item._id}> >
              
                    <section className="recipes">
                    
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={item.img_url} alt=""/>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <h5>{item.drinkName}</h5>
                                            <p>{item.description}</p>      
                                        </div>
                                        <div className="card-action">
                                            <Link to={`/liquor_recipes/${item._id}`}>
                                                <h2> Make Me </h2>
                                            </Link>

                                            <div className="rate">
                                                <p>{item.votes} votes</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                    </section>
            </div>)
            
            })
        }     
            
    
        return (
            <div>
                {renderedResults}
            </div>
        )
    }

}





export default SingleLiquorType;
