import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
   
    return (
      <div className="App">
        Home Page
        <Link to="/invoices/search">search</Link> 
      </div>
    );
  }
}

export default HomePage;
