import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <Link to="/liquor_types" className="brand-logo">Pick your Poison</ Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> <a href="./create.html">Share your Poison</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation
