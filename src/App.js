import React, { Component } from 'react';
import Main from './components/Main';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

library.add(faTrash, faPen);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
