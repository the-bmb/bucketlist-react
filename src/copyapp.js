import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    num: 0
  };

  handleClick() {
    this.setState(function(state) {
      return { num: state.num + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.num}</h1>
          <button onClick={
              this.handleClick.bind(this)
            }>
            Count
          </button>
        </header>
      </div>
    );
  }
}

export default App;
