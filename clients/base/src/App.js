import React, { Component } from 'react';
import './App.css';
import Panel from './components/Panel'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
      </div>
    );
  }
}

export default App;
