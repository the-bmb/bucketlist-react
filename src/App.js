import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import trashIcon from "./trash.png";

class App extends Component {
 
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <input placeholder="Whats need to be done"/>
          <ul>
            <li></li>
          </ul>
          <img alt="delete" src={trashIcon} />
        </header>
      </div>
    )
  }
}

export default App;
