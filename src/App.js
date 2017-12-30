
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import ActionArea from './ActionArea'; 


class App extends Component {
  render() {
   
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/invoices/search" component={SearchPage} /> 
      </div>
    );
  }
}

export default App;
