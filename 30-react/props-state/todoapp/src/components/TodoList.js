import React, { Component } from 'react'
import TodoItem from './TodoItem'



class TodoList extends Component {


  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  // shouldComponentUpdate(){
  //   return f
  // }

  componentWillReceiveProps(nextProps) {
    console.log("Original props:", this.props)
    console.log("Future props:", nextProps)

  }


  componentWillMount() {
    console.log("TodoList Mounting")
  }

  componentDidMount() {
    console.log("TodoList has Mounted")
  }





  render() {
    console.log("Rendering: TodoList")
    // grabbing our props and creating todoItems from props

  const todos = this.props.todos.map((todo, index) => <TodoItem onDelete={this.props.handleDelete} key={index} item={todo}  />)

    return (
      <div id="todo-list">
          <ul>
           { todos }
          </ul>
        </div>
    )

  }
}





export default TodoList
