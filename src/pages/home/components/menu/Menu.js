import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DanielIcon from '../../../../images/daniel.jpg'

class Menu extends Component {
  render() {

    return (
        <div className="ui three stackable cards"> 

            <div className="column">
                <div className="ui fluid card"></div>
                <div className="image">
                    <img src={DanielIcon} alt="image is not downloaded" style={{width:250, height:250}}/>
                </div>
                <div className="content">
                   <Link to="/" >Daniel Louise </Link>
                </div>
            </div>
            
        </div>
    );
  }
}

export default Menu