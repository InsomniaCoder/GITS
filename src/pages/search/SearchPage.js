import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchPage extends Component {
  render() {
   
    return (
      <div className="App">
        Search Page
        <Link to="/">HomePage</Link> 
      </div>
    );
  }
}

export default SearchPage;
