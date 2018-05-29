import React, { Component } from 'react';
import CocktailModel from '../models/CocktailModel';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Liquor_types extends Component {
    state = {
        results: null,
    };

    componentDidMount() {
        axios.get(`http://localhost:3001/liquor_types`)
        .then((data)=>{
            this.setState({results: data});
            console.log(this.state)
        })
    }
    
    render(){
        console.log(123)

        // console.log('hello', results);
        // !== null ? this.state.results : null;
        // let type = this.state.results.liquor_types;

                   

        // results.map(type => {
        //     return(

        //         <div>
            
        //             <div className="instructions">
        //                 <p>Discover your new favorite drink by selecting the liquor of your choice then browsing our recipes or add your own.</p>
        //             </div>
        //             <section className="liquors">
        //                 <a href="./recipes.html">
        //                 <div className="col s12 m7">
        //                     <div className="card">
        //                     <div className="card-image">
        //                         {/* <img src={this.state.type.image_url}/> */}
        //                     </div>
        //                     <div className="card-content">
        //                         <p>{this.state.type}</p>
        //                     </div>
        //                     </div>
        //                 </div>
        //                 </a>
        //             </section>
        //         </div>
        //     )
        // })

    let renderedResults;
    let results = this.state.results;
    if (results === null) {
        renderedResults = <div>Loading...</div>
    } else{
        console.log('results', this.state.results)
        renderedResults = this.state.results.data.map(item => {
        return <div key={item._id}>{item._id.type}
                    <section className="liquors">
                         <a href="./recipes.html">
                         <div className="col s12 m7">
                             <div className="card">
                             <div className="card-image">
                                 {/* <img src={this.state.type.image_url}/> */}
                             </div>
                             <div className="card-content">
                                 <p>{item._id.type}</p>
                             </div>
                             </div>
                         </div>
                         </a>
                    </section>
                </div>
     })
    }


    return(
        <div>
            <div className="jumbotron">
                <span className="poison-heading">
                    <h3>Pick Your Poisonsss</h3>
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
