import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import trashIcon from "./trash.png";

class App extends Component {
 
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="Whats need to be done"/>
          <ul>
          <li className="completed">
            <input type="checkbox" checked="checked" />
            <input type="text" value="Buy milk" />
            <img alt="delete" src={trashIcon} height="24" width="24" />
          </li>
          <li>
            <input type="checkbox" />
            <input type="text" value="Pay the phone bill" />
            <img alt="delete" src={trashIcon} height="24" width="24" />
          </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default App;
