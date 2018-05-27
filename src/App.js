import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js'
// Import the component you want to view
import SingleLiquorType from './components/SingleLiquorType';

// where components will meet - homepage
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Switch>
          <Route path='/:liquor_id' component={SingleLiquorType} />
        </Switch>
      </div>
    );
  }
}

export default App;
