import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends Component {

  constructor() {
    super()
    // state has initial value
    this.state = {
      todos: ["Wash Dishes", "Do Laundry", "Brush Teeth", "eat Steak"],

    }
  }


  componentWillMount() {
    console.log("App Mounting")
  }

  componentDidMount() {
    console.log("App has Mounted")
  }


  removeTodo = (task) => {
    const todos = this.state.todos
    const indexOfTask = todos.indexOf(task)
    this.setState({
      todos: [...todos.slice(0, indexOfTask), ...todos.slice(indexOfTask + 1)]
    })

  }


  addTodo = (task) => {
    console.log("Adding Todos", task)
    const todos = this.state.todos
    this.setState({
        todos:[...todos, task]
    })

  }


  render() {
    console.log("Rendering: App")
    
    return (
      <div className="ui grid two column centered">
        <div className="column">
        {/* Passing state to Todolist as props */}
        <TodoList handleDelete={this.removeTodo} todos={this.state.todos}/>
        <TodoForm handleSubmit={this.addTodo}/>
        </div>
      </div>

    );
  }
}


export default App;
