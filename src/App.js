import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

import { v4 as uuid } from 'uuid';



class App extends Component {


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=21')
      .then(res => this.setState({ todos: res.data }))
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos?${id}`)
      .then(this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   //title:title,
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }




  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  state = {
    todos: []
  }
  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
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