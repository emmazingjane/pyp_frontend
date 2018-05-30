import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            results: null,
            votes: 0,
        }

        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3001/liquor_recipes/${id}`)
        .then((data)=>{
            console.log('hhhh', data.data)
            this.setState({
                results: data.data,
                votes: data.data.votes,
            });
        
        })
    }

    upVote() {
        console.log("vote button clicked");
        // // axios call
        let id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:3001/liquor_recipes/${id}`)
        .then(data => {
            console.log('single Recipe vote: ', data.data.votes)
            this.setState({
                votes: (this.state.votes + 1)
            })
        })
    }

    downVote() {
        console.log("vote button clicked");
        // // axios call
        let id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:3001/liquor_recipes/${id}`)
        .then(data => {
            console.log('single Recipe vote: ', data.data.votes)
            this.setState({
                votes: (this.state.votes - 1)
            })
        })
    }

    render(){
        // let results = this.state.results !== null ? this.state.results : <h2>Loading...</h2>

        let results = this.state.results !== null
            ? <div className="single-recipe-body">
                    <div className="column-1">
                        <img src={this.state.results.img_url} className="about-image" alt=""/>
                        <div className="rate">
                                <button onClick={this.upVote} className="btn-floating btn-small waves-effect waves-light green"><i className="material-icons">+</i></button>
                                    <p>{this.state.votes} votes</p>
                                                
                                    <button onClick={this.downVote} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">-</i></button>
                        
                         </div>
                    </div>
                    <div className="column-2">
                        <h3>{this.state.results.drinkName}</h3>
                        <p> {this.state.results.ingredients} </p>
                        
                        <h4>How to make</h4>
                        <p>{this.state.results.instructions}</p>


                        {/* <a className="waves-effect waves-light btn-small" href="./recipes.html">Choose a Different Drink</a> */}
                    </div>
                </div>
            : '<h3>Loading...</h3>'

        console.log('RESULTS: ', this.state.results)
        return (
            <div>
                {results}
            </div>    
        )

    
    }

}

export default Recipe;
