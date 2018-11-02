import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play some mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos   //since the key and the value have the same name here in ES6 you don't need todos:todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">To Dos</h1>
          <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>  
          <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
