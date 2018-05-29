import React, { Component } from 'react'

class Navigation extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <a href="./index.html" className="brand-logo">Pick your Poison</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> <a href="./create.html">Share your Poison</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation
