import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <Link to="/liquor_types" className="brand-logo">Pick your Poison</ Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Link to="/liquor_recipes"> Share Your Poison </Link>

                </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation
