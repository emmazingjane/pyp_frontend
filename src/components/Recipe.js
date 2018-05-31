import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            results: null,
           
        }

        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        // axios.get(`http://localhost:3001/liquor_recipes/${id}`)
        // // Heroku: (3 total)
        axios.get(`https://pyp-backend.herokuapp.com/liquor_recipes/${id}`)
        .then((data)=>{
            console.log('hhhh', data.data)
            this.setState({
                results: data.data,
                
            });
        
        })
    }

    upVote(e) {
        e.preventDefault();
        console.log("vote button clicked");
        // // axios call
        let id = this.props.match.params.id;
        let updatedUpVote = this.state.results.votes + 1;
        let updatedResult  = this.state.results;
        updatedResult.votes = updatedUpVote;
        console.log('votes', updatedResult);
        console.log(id);
        // axios.put(`http://localhost:3001/liquor_recipes/${id}`, updatedResult)
        // // Heroku:
        axios.put(`https://pyp-backend.herokuapp.com/liquor_recipes/${id}`, updatedResult)
        .then(results => {
            console.log('RESPONSE: ', results)
            this.setState({ results: results.data })
        })
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    downVote(e) {
        e.preventDefault();
        console.log("vote button clicked"); 
        // // axios call
        let id = this.props.match.params.id;
        let updatedDownVote = this.state.results.votes - 1;
        let updatedResult  = this.state.results;
        updatedResult.votes = updatedDownVote;
        console.log('votes', updatedResult);
        console.log(id);
        // axios.put(`http://localhost:3001/liquor_recipes/${id}`, updatedResult)
        // // Heroku:
        axios.put(`https://pyp-backend.herokuapp.com/liquor_recipes/${id}`, updatedResult)
        .then(results => {
            console.log('RESPONSE: ', results)
            this.setState({ results: results.data })
        })
    }

    render(){
        // let results = this.state.results !== null ? this.state.results : <h2>Loading...</h2>
        console.log("help", this.state.results)
        console.log(1111, this.state)
        let results = this.state.results !== null
            ? <div className="single-recipe-body">
                    <div className="column-1">
                        <img src={this.state.results.img_url} className="about-image" alt=""/>
                        <div className="rate">
                                <button onClick={this.upVote} className="btn-floating btn-small waves-effect waves-light green"><i className="material-icons">+</i></button>
                                    <p>{this.state.results.votes}votes</p>
                                                
                                <button onClick={this.downVote} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">-</i></button>
                        
                         </div>
                    </div>
                    <div className="column-2">
                        <h3>{this.state.results.drinkName}</h3>
                        <p> {this.state.results.ingredients} </p>
                        
                        <h4>How to make</h4>
                        <p>{this.state.results.instructions}</p>
                        
                        {/* this.props.history.push(`/liquor_recipes/${res.data._id}`); */}
                        <button onClick={this.handleBack} className="waves-effect waves-light btn-small">Choose a Different Drink </button>

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
