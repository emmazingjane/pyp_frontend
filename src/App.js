import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js';
import SingleLiquorType from './components/SingleLiquorType';
import Liquor_types from './components/liquor_types';

// where components will meet - homepage
class App extends Component {
  render() {
    return (
      <div> 
        <Navigation />
        <Switch>
          <Route exact path='/liquor_types' component={Liquor_types} />
          <Route path='/liquor_types/:liquor_id' component={SingleLiquorType} />
        </Switch>
      </div>
    );
  }
}

export default App;
