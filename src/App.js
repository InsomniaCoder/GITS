
import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NavBar from './pages/home/components/navbar/NavBar';
import SearchingPage from './pages/searching/SearchingPage';


class App extends Component {
  render() {
   
    return (
      <div className="ui container">
        <NavBar/>
        <div style={{paddingTop:60}}>
          <Route path="/" exact component={HomePage} />
          {/* 
          <Route path="/invoices/indexing" exact component={IndexingPage} />
          <Route path="/invoices/coding" exact component={WorkflowPage} />
          <Route path="/invoices/approving" exact component={ApprovingPage} />
          <Route path="/invoices/processing" exact component={ProcessingPage} />
          <Route path="/invoices/recycling" exact component={RecyclingPage} />
          <Route path="/invoices/admin" exact component={AdminPage} />
          */}
          <Route path="/invoices/searching" component={SearchingPage} /> 
        </div>
      </div>
    );
  }
}

export default App;
