import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo_list';
import AddTodoItems from './components/add_todo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AddTodoItems
       store={this.props.store}>
      </AddTodoItems>
      </div>
    );
  }
}

export default App;
