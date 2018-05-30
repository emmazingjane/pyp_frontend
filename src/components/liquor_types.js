import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Liquor_types extends Component {
    state = {
        results: null,
    };

    componentDidMount() {
        axios.get(`http://localhost:3001/liquor_types`)
        .then((data)=>{
            console.log(data);
            this.setState({results: data});
            console.log(this.state)
        })
    }
    
    render(){
        console.log(123)

    let renderedResults;
    let results = this.state.results;
    if (results === null) {
        renderedResults = <div>Loading...</div>
    } else{
        console.log('results', this.state.results)
        renderedResults = this.state.results.data.map(item => {
            console.log('item', item)
        return <span key={item._id}> 
                    <span className="liquors">
                         <Link to={`/liquor_types/${item._id}`}>
                                
                                 <span className="type">{item.liquorType}</span>
                                 

                         
                         </Link>
                    </span>
                </span>
     })
    }


    return(
        <div>
            <div className="jumbotron">
                <span className="poison-heading">
                    <h3>Pick Your Poison</h3>
                    <h5>share and find the best drinks to wet your whistle</h5>
                </span>
            </div>
          
            <div className="instructions">
                <p>Discover your new favorite drink by selecting the liquor of your choice then browsing our recipes or add your own.</p>
            </div>
            {renderedResults}
            

        </div>
      )
    
    }
}

export default Liquor_types;
