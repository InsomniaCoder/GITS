import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchingPage extends Component {
  render() {
   
    return (
      <div>
        Searching Page
        <Link to="/">HomePage</Link> 
      </div>
    );
  }
}

export default SearchingPage;
