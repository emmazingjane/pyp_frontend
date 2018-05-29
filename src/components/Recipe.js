import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Recipe extends Component {
    state = {
        results: null,
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3001/liquor_recipes/${id}`)
        .then((data)=>{
            console.log('hhhh', data.data)
            this.setState({
                results: data.data,
            });
        
        })
    }

    render(){
        // let results = this.state.results !== null ? this.state.results : <h2>Loading...</h2>
        console.log('RESULTS: ', this.state.results)
        return (
            <div>
                <p>{this.state.results ? this.state.results.description : ''}</p>
            </div>
            
        )
    }

}

export default Recipe;
