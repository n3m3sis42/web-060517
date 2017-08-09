import React from 'react'


class TodoForm extends React.Component {


    constructor() {
        super()
        this.state = {
            task: ""
        }


        console.log(this)
    }

    onSubmit = (event) => {
      console.log(this.state)
        event.preventDefault()
        console.log("On Submit")
        // addTODO from parent
        this.props.handleSubmit(this.state.task)
        this.setState({
          task: ""
        })
    }


    handleInputChange = (e) => {
      console.log(e.target.value)
      this.setState({
        task: e.target.value
      })
    }

    render() {
      console.log("Rendering from form state:", this.state.task)
        return (
        <div id="todo-form">
          <form action="" className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
            <input type="text" value={this.state.task} onChange={this.handleInputChange}/><br/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
        )
    }
}

export default TodoForm
