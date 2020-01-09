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
    todos: []
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

  deleteItem = async (id) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(response);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  addTodo = async (title) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      });
      this.setState({
        todos: [...this.state.todos, response.data]
      });

    } catch (error) {
      console.log(error);
    }
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

  async componentDidMount() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      console.log(response.data);
      this.setState({ todos: response.data })
    } catch (error) {
      console.log(error);
    }


  }

}

export default App;
