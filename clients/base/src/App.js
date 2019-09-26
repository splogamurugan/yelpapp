import React, { Component } from 'react';
import './App.css';
import Panel from './components/Panel'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <Panel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
