import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About'

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
      todos: [...this.state.todos, {
        id: this.state.todos.length + 1,//not the best - possible conflicts on the id key - use a unique id generator
        title,
        completed: false
      }]

    });

  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }

}

export default App;
