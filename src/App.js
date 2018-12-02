import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import REST from './components/rest/index';
import SOAP from './components/soap/index';
import GeoNames from './components/geonames';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

library.add(faTrash, faPen);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/rest" component={REST} />
          <Route path="/soap" component={SOAP} />
          <Route path="/geonames" component={GeoNames} />
        </div>
      </Router>
    );
  }
}

export default App;
