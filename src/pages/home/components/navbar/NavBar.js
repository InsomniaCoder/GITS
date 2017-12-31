import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {

    return (

      <div className="ui large top fixed hidden menu">
        <div className="ui container">
        <a className="item">Global Invoice Tracking System</a>
         
          <div className="right menu">
            <a className="active item"> <Link to="/">HomePage</Link> </a>
            <div className="item">
              Welcome   <b style={{marginLeft:20}}>Tanat Lokejaroenlarb </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
