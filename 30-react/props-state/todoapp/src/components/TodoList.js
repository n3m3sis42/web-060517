import React, { Component } from 'react'
import TodoItem from './TodoItem'



class TodoList extends Component {


  constructor(props) {
    super(props)
  }

  render() {
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
