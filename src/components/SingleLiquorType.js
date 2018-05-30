import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleLiquorType extends Component {
    constructor() {
        super();
        this.state = {
            results: null,
        };
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


    render(){

        // let results = this.state.results !== null ? this.state.results
        let renderedResults;
        let results = this.state.results;
        if (results === null) {
            renderedResults = <div>Loading...</div>
        } else {
            console.log('results', this.state.results)
            renderedResults = this.state.results.data.sort((a,b) => {
                return b.votes - a.votes;
            }).map(item => {
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
