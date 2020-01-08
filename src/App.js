import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Follow up on Sacco things',
        completed: false
      }
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;

      })
    });
  }

  deleteItem = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)

    });
  };

  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos,{
        id: this.state.todos.length + 1,
        title,
        completed: false
      }]

    });

  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
          <AddTodo addTodo={this.addTodo} />
        </div>

      </div>
    );
  }

}

export default App;
