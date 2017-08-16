import React from 'react'


class TodoItem extends React.Component {


  handleClick = (e) => {
      this.props.onDelete(this.props.item)
      console.log("Clicking link", this.props.item)
  }

  componentWillReceiveProps(nextProps) {
    console.log("TodoItem - Original props:", this.props)
    console.log("TodoItem - Future props:", nextProps)

  }


  componentWillMount() {
    console.log("TodoItem Mounting", this.props.item)
  }

  componentDidMount() {
    console.log("TodoItem has Mounted")
  }

  render() {
    
    console.log("TodoItem rendering")
    return (
       <li onClick={this.handleClick}>{this.props.item}</li>
    )
  }
}


export default TodoItem
