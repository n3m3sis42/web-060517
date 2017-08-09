import React from 'react'


class TodoItem extends React.Component {


  handleClick = (e) => {
      this.props.onDelete(this.props.item)
      console.log("Clicking link", this.props.item)
  }

  render() {
    return (
       <li onClick={this.handleClick}>{this.props.item}</li>
    )
  }
}


export default TodoItem
