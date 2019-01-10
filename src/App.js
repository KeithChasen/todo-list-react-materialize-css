import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
        {id:1, content:'Get a job'},
        {id:2, content:'Drink some beer'},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
