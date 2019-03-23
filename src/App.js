import React, { Component } from 'react';
import './App.css';
import trashIcon from "./trash.png";

class App extends Component {
  state = {
    newTask:"",
    task : [
      {
        name:"Estudar",
        completed:true
      },
      {
        name:"Beber água",
        completed:false
      }
    ]
  }

  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    this.setState(state => {
      const tasks = [...state.task];
      tasks.push({ name: state.newTask, completed: false });
      return {
        task: tasks,
        newTask: ""
      };
    });
  }

  handleToggle(index) {
    this.setState(state => {  
      const tasks = [...state.task];
      tasks[index].completed = !tasks[index].completed
      return {
        task: tasks,
      };
    });
  }

  handleDelete(index) {
    this.setState(state => {  
      const tasks = [...state.task];
      tasks.splice(index, 1);
      return {
        task: tasks,   
      };
    });
  }
  
  render(){
    return(
      <div className="App">   
        <header className="App-header">
          <input type="text" placeholder="Whats need to be done" 
            value={this.state.newTask}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
          <ul>  
            {this.state.task.map((task, index) => {
              return(
                <li key={index} className={task.completed ? "completed" : ""}>
                  <input type="checkbox" 
                    checked={task.completed} 
                    onChange={this.handleToggle.bind(this, index)}/>
                  <input 
                    type="text" 
                    value={task.name} readOnly/>
                  <img alt="delete" src={trashIcon} height="24" width="24" 
                    onClick={this.handleDelete.bind(this, index)}/>
                </li>
              )
            })}
          </ul>
        </header>
      </div>
    )
  }
}

export default App;
